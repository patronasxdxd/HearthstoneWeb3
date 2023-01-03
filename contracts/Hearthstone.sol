// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */


import  "contracts/Characters.sol";



contract Hearthstone {


    Characters public charC;

    uint nonce = 0;

constructor (address _address) {
    charC = Characters(_address);
}
     





    struct Player {
        string username;
        uint health;
        uint mana;
        Champs[7] minions;
        Champs[10] hand;
    }

    struct Champs {
        uint health;
        uint attack;
        uint manaCost;
        uint id;
    }

    struct Board {
        Champs[7] player1Row;
        Champs[7] player2Row;
    }

    struct Game {
        uint gameId;
        Board board;
        Player[2] player;
    }   

    mapping (address => Game) public games;
    mapping (address => string ) public usernames;
    uint private gameCount = 0;



    function createGame() external {

        Game storage game = games[msg.sender];
        Player storage player1 = games[msg.sender].player[0];
        Player storage player2 = games[msg.sender].player[1];
        game.gameId = gameCount++;

        player1.username = "patronasXd";
        player1.health = 30;
        player1.mana = 1;
        player1.hand[0] = drawCard();
        player1.hand[1] = drawCard();
        player1.hand[2] = drawCard();


        player2.username = "Bot";
        player2.health = 30;
        player2.mana = 1;
        player2.hand[0] = drawCard();
        player2.hand[1] = drawCard();
        player2.hand[2] = drawCard();

        //draw hand



        


        
    }


function drawCard() internal returns (Champs memory){

       uint[4] memory xc = charC.getCharacter(_createRandomNum());
         Champs memory cp = Champs(xc[0],xc[1],xc[2],xc[3]);
        return cp;
}

function _createRandomNum( ) internal returns (uint256 randomValue) {
    uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender,nonce)));

    nonce++;
    randomValue = randomNum % 5;
    if(randomValue == 0) {
      randomValue = 1;
    }

    return randomValue;
  }

    function playMinion(uint minionId) external {
        Game storage game = games[msg.sender];

        game.player[0].minions[0] = Champs(5,5,1,1); 

        

    }

    function getBoard() external view returns (uint)  {

        return games[msg.sender].player[0].minions[0].id;
    }

    function getAttack(uint id) external view returns (uint ) {

        uint[4] memory xc = charC.getCharacter(id);
         Champs memory cp = Champs(xc[0],xc[1],xc[2],xc[3]);
        return cp.attack;
    }

    function showHand() external view  returns (uint[] memory){

        uint[] memory hand;

        for (uint i = 0;i < games[msg.sender].player[0].hand.length;i++){
            hand[i] = games[msg.sender].player[0].hand[i].id;
        }


        return hand;
    }


    function showcard(uint id) external view returns (uint[4] memory) {
        Champs memory minion = games[msg.sender].player[0].hand[id];
        return [minion.health,minion.attack,minion.manaCost,minion.id];
    }
    

    function handSize() external view returns (uint) {
       return games[msg.sender].player[0].hand.length;
    }
  



    
    

}
