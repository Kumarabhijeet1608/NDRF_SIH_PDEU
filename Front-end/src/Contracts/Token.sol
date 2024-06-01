pragma solidity ^0.5.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/math/SafeMath.sol";

contract Token {

    using SafeMath for uint;

    //variables

    string public name = "Disaster Token";
    string public symbol = "DIS";
    uint256 public decimals = 18;
    uint256 public totalSupply;

    //events

    event Transfer(address indexed from, address indexed to, uint256 value);  
    event Approval(address indexed owner, address indexed spender, uint256 value);

    //Track balance

    mapping(address => uint256) public balanceof;
    mapping(address => mapping(address => uint256)) public allowance;
    
    constructor() public {
        totalSupply = 1000000 * (10 ** decimals);
        balanceof[msg.sender] = totalSupply;
    }



    //send tokens

    function transfer(address _to, uint256 _value) public returns (bool success) {
        
        
        require( balanceof[msg.sender] >= _value);
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function _transfer(address _from, address _to, uint256 _value) internal {

        require( _to != address(0));

        balanceof[_from] = balanceof[_from].sub(_value);
        balanceof[_to] = balanceof[_to].add(_value);
        emit Transfer(_from, _to,  _value);

    }


    // Approve tokens
    function approve(address _spender, uint256 _value) public returns (bool success){

        require( _spender != address(0));
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;

    }

    // Transfer from

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceof[_from]);
        require(_value <= allowance[_from][msg.sender]);
        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
        _transfer(_from, _to, _value);
        return true;

    }



}
