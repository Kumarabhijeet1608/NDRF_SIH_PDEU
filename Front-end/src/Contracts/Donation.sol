pragma solidity >=0.4.22 <0.7.0;

contract Donation {
    uint public amount; // amount to be sent
    address payable public reciever; // reciever to recieve the amount
    address payable public donor; // donor to send the amount
    enum State { Created, Completed }
    State public state; // state of the transaction

    constructor() public payable {
        reciever = msg.sender;
        amount = msg.value;
    }

    modifier onlyReciever() {
        require(
            msg.sender == reciever,
            "Only reciever can call this."
        );
        _;
    }

    modifier onlyDonor() {
        require(
            msg.sender == donor,
            "Only donor can call this."
        );
        _;
    }

    modifier inState(State _state) {
        require(
            state == _state,
            "Invalid state."
        );
        _;
    }
    
    event DonationConfirmed();

    /// Confirm that the reciever wants to recieve the item
    /// This will release the locked ether.
    function confirmReceived()
        public
        onlyReciever
        inState(State.Created)
    {
        emit DonationConfirmed();
        
        donor.transfer(amount);
        reciever.transfer(address(this).balance);
        state = State.Completed;
    }
}
