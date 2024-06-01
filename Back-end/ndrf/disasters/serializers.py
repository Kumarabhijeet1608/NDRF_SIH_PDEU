from rest_framework import serializers
import json
# from .models import *

# class DisasterSerializer(serializers.Serializer):
#     # class Meta:
#     #     model = Disasters
#     #     fields = "__all__"
#     id = serializers.IntegerField()
#     name = serializers.CharField(max_length=255)
#     description = serializers.CharField(max_length=255)
#     disasterType = serializers.CharField(max_length=255)
#     severity = serializers.IntegerField()
#     location = serializers.CharField(max_length=255)

def getDisasterObj(disaster):
    obj = {
        "id" : disaster[0],
        "timestamp" : disaster[1],
        "name" : disaster[2],
        "description" : disaster[3],
        "disasterType" : disaster[4],
        "severity" : disaster[5],
        "location" : disaster[6]
    }
    return obj

