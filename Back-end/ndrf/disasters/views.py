# from re import search
# from django.shortcuts import render
# from django.http import HttpResponse
# from django.db.models import Q
# from django.core.paginator import Paginator
# from django.views.decorators.csrf import csrf_exempt
# from django.template import loader

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

# from .models import *
from .serializers import *

# import os
# print(os.listdir())

import requests
import json

import asyncio

from web3 import Web3
ganache_url = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(ganache_url))


def getContract(contract_name):
    with open("disasters/abi.json") as abi_file:
        abi = json.load(abi_file)[contract_name]
    with open("disasters/contracts.json") as contracts_file:
        contract_address = json.load(contracts_file)[contract_name]
    return web3.eth.contract(address=contract_address,abi=abi)

def getABI(contract_name):
    with open("disasters/abi.json") as abi_file:
        abi = json.load(abi_file)[contract_name]
    return abi

def getContractFromAddress(contract_address,abi):
    return web3.eth.contract(address=contract_address, abi=abi)




class DisasterList(APIView):
    def get_disaster_contract_list(self):
        user_contract = getContract("User")
        disaster_contract_list = user_contract.functions.getDisasters().call()
        return disaster_contract_list
    
    def get_disaster_list(self, disaster_contract_list):
        disaster_list = []
        for contract_address in disaster_contract_list:
            abi = getABI("Disaster")
            contract = getContractFromAddress(contract_address,abi)
            disaster_info = contract.functions.getDisasterInfo().call()
            obj = getDisasterObj(disaster_info)
            # obj = Disaster(disaster_info).toJSON()
            # disaster = obj.toJson()
            disaster_list.append(obj)
            print(disaster_info)
            print(obj)
        print(disaster_list)
        return disaster_list

    def get(self,request):
        disaster_contract_list = self.get_disaster_contract_list()
        disaster_list = self.get_disaster_list(disaster_contract_list)
        return Response(disaster_list)

    def createDisaster(self,contract,disaster_info,from_address,key):
        print("here")
        nonce = web3.eth.getTransactionCount(from_address)
        tx = contract.functions.createDisaster(disaster_info).build_transaction({
            "from" : from_address,
            "nonce" : nonce
        })
        signed_tx = web3.eth.account.sign_transaction(tx,key)
        tx_hash = web3.toHex(web3.eth.send_raw_transaction(signed_tx.rawTransaction))
        print(tx_hash)
        print(web3.eth.get_transaction(tx_hash).input)
        return tx_hash

    def handle_event(self,event):
        print("this",Web3.toJSON(event))
        return Web3.toJSON(event)

    async def log_loop(self,event_filter, poll_interval):
        # while True:
        for DisasterCreated in event_filter.get_new_entries():
            print("here")
            obj = self.handle_event(DisasterCreated)
        await asyncio.sleep(poll_interval)   
        return obj

    def post(self,request):
        disaster_info = request.data
        print(disaster_info)
        user_contract = getContract("User")
        event_filter = user_contract.events.DisasterCreated.createFilter(fromBlock='latest')
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        self.createDisaster(user_contract,disaster_info,"0xcBE1872E413eBAd2BBEC81b28D6BE7b8be7Bb731","0x1f8918b4b0ff1812cdd53878f32a7b0a667d5ffd8f55ddb0118172ca94ee94bd")
        # print("here")
        try:
            loop.run_until_complete(
                asyncio.gather(
                    self.log_loop(event_filter,2)
                )
            )
        finally:
            loop.close()
        
        # if event:
        #     return Response(event)
        # else:
        #     return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK)

class DisasterDetails(APIView):
    def get_disaster_by_id(self,disaster_id):
        user_contract = getContract("User")
        abi = getABI("Disaster")
        disaster_contract_address = user_contract.functions.getDisasterByID(disaster_id).call()
        disaster_contract = getContractFromAddress(disaster_contract_address,abi)
        disaster_info = disaster_contract.functions.getDisasterInfo().call()
        obj = getDisasterObj(disaster_info)
        return obj
    def get(self,request,disaster_id):
        obj = self.get_disaster_by_id(disaster_id)
        if obj:
            return Response(obj)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self,request,id):
        return
    def delete(self,request,id):
        return

class IncidentList(APIView):
    def get(self,request,disaster_id):
        return
    def post(self,request):
        return

class IncidentDetails(APIView):
    def get_incident_by_id(self,disaster_id,incident_id):
        return
    def get(self,request,disaster_id,incident_id):
        return
    def put(self,request,disaster_id,incident_id):
        return
    def delete(self,request,disaster_id,incident_id):
        return




class Weather(APIView):
    def get(self,request,disaster_id):
        """
            disaster = Disasters.objects.get(id=id)
            get lat,long from disaster.location 
            further we can provide an incident query
            where 
            /disaster/{disaster_id}/incident/{incident_id}/weather
            this can be done
            or /disaster/{disaster_id}?incident={incident_id}/weather
            former seems easier to handle, so call that from frontend when an incident is filtered 
            in the weather page
            and also give an option to see weather around an incident by having a weather option in the
            incident page
            * have an option to choose location, type or pin (depending on how much time we have) to 
            pull up weather data of that region*
            incident = request.GET.get()
        """
        lat = request.GET.get('lat')
        lon = request.GET.get('lon')
        response = requests.get("https://www.mosdac.gov.in/apiweather1/weather?lon="+lon+"&lat="+lat)
        text = response.text
        object = json.loads(text)
        return Response(object)

class HeavyRain(APIView):
    def get_bbox(self,lat,long):
        return
    def get(self,request,disaster_id):
        response = requests.get('https://www.mosdac.gov.in/geoserver_2/heavyrain_forecast/wms?REQUEST=GetFeatureInfo&QUERY_LAYERS=heavyrain_forecast%3AGEO_HRAIN_FC48&LAYERS=heavyrain_forecast%3AGEO_HRAIN_FC48&INFO_FORMAT=application%2Fjson&X=229&Y=201&WIDTH=256&HEIGHT=256&SRS=EPSG%3A3857&BBOX=8453323.832114212%2C2817774.6107047386%2C8609866.866042253%2C2974317.6446327795   ')
