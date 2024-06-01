 // SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './SafeMath.sol';
contract Bank {
    using SafeMath for uint;

    string name = "NDRF Disaster Token";
    string symbol = "DIS";
    // multiplier
    // uint numerator = 1;
    // uint denominator = 2;

    mapping (address => uint) balance;

    event TokensTransferred(address indexed from, address indexed to, uint256 value);  
    event Donated(uint value);
    event PaymentReceived(uint value);
    event PaymentFailed();

    constructor () payable {
        balance[address(this)] = msg.value;
    }

    receive() external payable {
        // balance[adderss(this)]
        emit PaymentReceived(msg.value);
    }
    fallback() external payable {
        emit PaymentFailed();
    }

    // function get

    function getTotalFunds() public view returns(uint){
        return balance[address(this)];
    }
    
    function getBalance(address _user) public view returns(uint){
        return balance[_user];
    }

    function transfer(address _to, uint _value) public {
        require(getTotalFunds() >= _value,"Insufficient balance");
        require(_to != address(0),"Invalid address");
        balance[address(this)] = balance[address(this)].sub(_value);
        balance[_to] = balance[_to].add(_value);
        emit TokensTransferred(address(this), _to,  _value);

    }

    function donate() public payable {
        balance[address(this)] = balance[address(this)].add(msg.value);
        emit Donated(msg.value);
    }

}