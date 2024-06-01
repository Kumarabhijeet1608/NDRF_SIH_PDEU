// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './User.sol';

contract SupplyChain {

    struct Stage {
        uint id;
        uint timestamp;
        // description can contain details of the requirements and other specifications of
        // different stages
        string description;
        string location;
    }
    mapping (uint => Stage) stageWithID;

    // incident id to stage array
    mapping (uint => Stage[])supplyChainOfIncident;

    // stage id to bool verified
    mapping (uint => bool) stageVerificationStatus;

    // incident id to stage id array
    mapping (uint => uint[]) stagesOfIncident;

    event CurrentStage(uint incidentID, uint stageID, string description, string location);
    event StageCreated(uint incidentID, uint stageID, string description, string location);
    event StageVerified(uint incidentID, uint stageID, string description, string location);

    // Get the current stage of the supply chain of the event
    function getCurrentStage(uint _incidentID) public returns(Stage memory) {
        Stage memory curStage = supplyChainOfIncident[_incidentID][supplyChainOfIncident[_incidentID].length - 1];
        emit CurrentStage(_incidentID,curStage.id,curStage.description,curStage.location);
        return curStage;
    }

    function initializeStage(uint _incidentID) public {
        Stage memory stage;
        stage.id = 0;
        stage.description = "Yet to start supply chain";
        stage.location = "location";
        supplyChainOfIncident[_incidentID].push(stage);
        stagesOfIncident[_incidentID].push(stage.id);
        stageWithID[stage.id] = stage;
    }
    
    // Add a stage to the supply chain of an event
    function addStage(uint _incidentID,Stage memory _stage) public {
        require(getStageStatus(_incidentID)==true,"Previous stage not verified");
        supplyChainOfIncident[_incidentID].push(_stage);
        stagesOfIncident[_incidentID].push(_stage.id);
        stageWithID[_stage.id] = _stage;
        stageVerificationStatus[_stage.id] = false;
        emit StageCreated(_incidentID, _stage.id,_stage.description,_stage.location);
    }

    // Approve the current stage
    function verifyStage(uint _incidentID) public {
        Stage memory curStage = getCurrentStage(_incidentID);
        stageVerificationStatus[curStage.id] = true;
        emit StageVerified(_incidentID, curStage.id,curStage.description,curStage.location);
    }

    // Check whether the current stage is approved or not
    function getStageStatus(uint _incidentID) public returns(bool) {
        Stage memory curStage = getCurrentStage(_incidentID);
        return stageVerificationStatus[curStage.id];
    }

    // Get ids of all stages in the supply chain
    function getSupplyChain(uint _incidentID) public view returns(uint[] memory) {
        return stagesOfIncident[_incidentID];
    }

    // Get Stage object by Stage ID
    function getStageByStageID(uint _stageID) public view returns(Stage memory) {
        return stageWithID[_stageID];
    }

}