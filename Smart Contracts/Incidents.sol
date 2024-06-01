 // SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './SupplyChain.sol';

contract Incidents{

    struct IncidentInfo {
        uint id;
        uint timestamp;
        string description;
        string location;
    }
    IncidentInfo[] incidents;

    mapping(uint => IncidentInfo) incidentWithID;

    struct IncidentStats {
        uint deathCount;
        uint affectedCount;
        string[] affectedAreas;
    }
    IncidentStats incidentStats;

    enum Status {
        active, 
        pending,
        closed
    }
    
    mapping(uint=>Status) statusOfIncidentWithID;
    
    // Dependency
    SupplyChain supplyChain;
    User user;
    
    // Events
    event CreatedIncident(IncidentInfo incidentInfo);
    event CreatedSupplyChain(SupplyChain supplyChain);
    event IncidentInformation(uint id,uint timestamp,string description,string location);
    event SupplyChainStage(uint id,uint timestamp,string description,string location);

    modifier onlyAuthorized(address _user,uint _rank) {
        require(user.getRank(_user)!=0,"Only ranked officials can access this method");
        require(user.getRank(_user) >= _rank, "Not Authorized");
        _;
    }

    constructor(SupplyChain _supplyChain, User _user) {
        supplyChain = _supplyChain;
        user = _user;
        // emit CreatedSupplyChain(supplyChain);
    }

    function createIncident(IncidentInfo memory _incidentInfo)public{
        incidents.push(_incidentInfo);
        incidentWithID[_incidentInfo.id] = _incidentInfo;
        supplyChain.initializeStage(_incidentInfo.id);
    }

    function getIncident(uint _id) public returns (IncidentInfo memory) {
        emit IncidentInformation(incidentWithID[_id].id,incidentWithID[_id].timestamp,incidentWithID[_id].description,incidentWithID[_id].location);
        return incidentWithID[_id];
    }

    function getStatus(uint _id) public view returns (Status) {
        return statusOfIncidentWithID[_id];
    }

    function addStageToSupplyChain(uint _incidentID, SupplyChain.Stage memory _stage, address _user) public onlyAuthorized(_user, 3) {
        supplyChain.addStage(_incidentID,_stage);
    } 

    function verifySupplyChainStage(uint _incidentID, address _user) public onlyAuthorized(_user,4) {
        supplyChain.verifyStage(_incidentID);
    }

    function getSupplyChainCurrentStage(uint _incidentID) public returns(SupplyChain.Stage memory) {
        SupplyChain.Stage memory stage = supplyChain.getCurrentStage(_incidentID);
        emit SupplyChainStage(stage.id, stage.timestamp, stage.description, stage.location);
        return stage;
    }

    function getStageStatus(uint _incidentID) public returns(bool) {
        return supplyChain.getStageStatus(_incidentID);
    }
    
    function getSupplyChain(uint _incidentID) public view returns (uint[] memory) {
        return supplyChain.getSupplyChain(_incidentID);
    }

    function getSupplyChainStageByStageID(uint _stageID) public returns (SupplyChain.Stage memory) {
        SupplyChain.Stage memory stage = supplyChain.getStageByStageID(_stageID);
        emit SupplyChainStage(stage.id,stage.timestamp,stage.description,stage.location);
        return stage;
    }

    function getSupplyChainContract() public view returns(SupplyChain) {
        return supplyChain;
    }
}