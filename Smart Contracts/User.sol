// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './Disaster.sol';
import './Incidents.sol';
import './SupplyChain.sol';

contract User{

    address owner;

    struct UserInfo {
        address publicAddress;
        string name;
        uint rank;
        string position;
        string phone;
    }
    UserInfo[] users;
    mapping (address=>UserInfo) userWithAddressOf;
    mapping (address=>uint) rankWithAddressOf;

    address[] disasters;
    mapping (uint=>address) disasterWithID;

    event DisasterCreated(address by, address disaster, address insidents, address supplyChain);
    event DisasterInformation(uint id, uint timestamp, string name, string description, string disasterType, uint severity, string location);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyAuthorized(address _user,uint _rank) {
        require(getRank(_user)!=0,"Only ranked officials can access this method");
        require(getRank(_user) >= _rank, "Not Authorized");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender==owner,"Only accessible by the owner of this contract");
        _;
    }

    function getUser(address _user) public view returns (UserInfo memory){
        return userWithAddressOf[_user];
    }

    function getRank(address _user) public view returns (uint) {
        return rankWithAddressOf[_user];
    }

    function createUser(UserInfo memory _user) public onlyOwner {
        users.push(_user);
        userWithAddressOf[_user.publicAddress] = _user;
        rankWithAddressOf[_user.publicAddress] = _user.rank;
    }

    function createDisaster(Disaster.DisasterInfo memory _disasterInfo) public onlyAuthorized(msg.sender,4){
        SupplyChain supplyChain = new SupplyChain();
        Incidents incidents = new Incidents(supplyChain,this);
        Disaster disaster = new Disaster(_disasterInfo,incidents,this);
        disasters.push(address(disaster));
        disasterWithID[_disasterInfo.id] = address(disaster); 
        emit DisasterCreated(address(msg.sender),address(disaster),address(incidents),address(supplyChain));
    }

    function getDisasters() public view returns (address[] memory){
        return disasters;
    }

    function getDisasterByID(uint _id) public view returns(address) {
        return disasterWithID[_id];
    }

}