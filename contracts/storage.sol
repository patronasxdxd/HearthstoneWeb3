// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract HeadOrTails {


 struct Player {
     uint moneyAmount;
     string name;
     address playerAddress;
     uint16 wins;
     uint16 loses;
     uint8 winstreak;
 }


    uint public Pool;
    mapping(address => Player) public accounts;


    constructor(){
      Pool = 1_000_000;
    }

    function viewAccount() public view returns (Player memory){
        return accounts[msg.sender];
    }

    function createAccount(string  calldata name) public{
        accounts[msg.sender].name = name;
        accounts[msg.sender].moneyAmount = 100;
        accounts[msg.sender].playerAddress = msg.sender;
    }


    /**
     * @dev Store value in variable
     * @param num value to store
     */


    function bet(uint8 num, uint amount) public {
       require(num == 1 || num == 2,"number should be 1 or 2");
       require( accounts[msg.sender].moneyAmount >= amount,"not enough balance");

        if(num == _createRandomNum()){
            accounts[msg.sender].wins += 1;
            accounts[msg.sender].winstreak += 1;
            accounts[msg.sender].moneyAmount += amount;
            Pool -= amount;
        }else{
            accounts[msg.sender].loses += 1;
            accounts[msg.sender].winstreak = 0;
            accounts[msg.sender].moneyAmount -= amount;
            Pool += amount;
        }

    }

    function _createRandomNum() public view returns (uint8) {
    return uint8(uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, block.difficulty)))%2+1);
  }



}
