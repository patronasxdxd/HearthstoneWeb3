// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */


import  "contracts/Characters.sol";

//attack 1,2,3,4,5,6,7 attacks enemy board 8 attacks face

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
        Champs[] minions;
        Champs[] hand;
    }

    struct Champs {
        uint health;
        uint attack;
        uint manaCost;
        uint id;
        string name;
        string description;
        bool taunt;
        bool windfury;
        bool divineshield;
        bool stealth;
        bool poisonious;
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
        // player1.hand.push( drawCard());
        player1.hand.push(Champs(1,2,1,1,"defender","Give adjusted minions +1/+1 and taunt",false,false,false,false,false));
        player1.hand.push( drawCard());
        player1.hand.push( drawCard());

        player2.username = "Bot";
        player2.health = 30;
        player2.mana = 1;
        player2.hand.push( drawCard());
        player2.hand.push( drawCard());
        player2.hand.push( drawCard());



        


        
    }


function drawCard() internal returns (Champs memory){

    (uint a,uint b ,uint c,uint d,string memory e, string memory f, bool g,bool h, bool i,bool j,bool k) = charC.getCharacter(_createRandomNum());
         Champs memory cp = Champs(a,b,c,d,e,f,g,h,i,j,k);
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


    function playMinion( uint _player) external {
        Game storage game = games[msg.sender];
        game.player[_player].minions.push( drawCard()); 
    }

    function playMinionById(uint minionId,uint _player) external {
        Game storage game = games[msg.sender];
        game.player[_player].minions.push(getMinionById(minionId) ); 
    }


    function getMinionById(uint minionId) internal returns (Champs memory) {
         (uint a,uint b ,uint c,uint d,string memory e, string memory f, bool g,bool h, bool i,bool j,bool k) = charC.getCharacter(minionId);
         Champs memory cp = Champs(a,b,c,d,e,f,g,h,i,j,k);
        return cp;
    }

   

    function getBoard() external view returns (uint)  {

        return games[msg.sender].player[0].minions[0].id;
    }

    function getAttack(uint id) external view returns (uint ) {

        (uint a,uint b ,uint c,uint d,string memory e, string memory f, bool g,bool h, bool i, bool j,bool k) = charC.getCharacter(id);
         Champs memory cp = Champs(a,b,c,d,e,f,g,h,i,j,k);
        return cp.attack;
    }


    function showcard(uint id) external view returns (uint[4] memory,string memory) {
        Champs memory minion = games[msg.sender].player[0].hand[id];
        return ([minion.health,minion.attack,minion.manaCost,minion.id],minion.name );
    }

    


    function showboardplace(uint id, uint _player) external view returns (uint[4] memory,string memory) {
        Champs memory minion = games[msg.sender].player[_player].minions[id];
        return ([minion.health,minion.attack,minion.manaCost,minion.id],minion.name);
    }

    
    
    function handSize() external view returns (uint) {
       return games[msg.sender].player[0].hand.length;
    }

     function boardSize() external view returns (uint) {
       return games[msg.sender].player[0].minions.length;
    }

   function getHealthBot() external view returns (uint) {
       return games[msg.sender].player[1].health;
    }

    function getHealthPlayer() external view returns (uint) {
       return games[msg.sender].player[0].health;
    }


    function attack(uint minion, uint target) external{
       uint _attack = games[msg.sender].player[0].hand[minion].attack;
       games[msg.sender].player[1].health = games[msg.sender].player[1].health - _attack;

        //check fletchling

        // if (games[msg.sender].player[1].minions[minion].id == 2) {
        //     trigger(minion);

        // }

    }


    function attackWithChooseOption(uint minion, uint target,uint chosen) external{
          uint _attack = games[msg.sender].player[0].hand[minion].attack;
       games[msg.sender].player[1].health = games[msg.sender].player[1].health - _attack;

        //check fletchling

        // if (games[msg.sender].player[1].minions[minion].id == 2) {
        //     trigger(minion,chosen);

        // }
    }

    function battleCryWithChooseOption(uint minion, uint target,uint chosen) external{

    }


    

//chosen means what position
    function trigger(uint  minion, uint chosen ) external {

        Champs storage champ = games[msg.sender].player[0].minions[minion];
        //fletching 3 things shown and has to pick 1 every time he attacks;
        if (games[msg.sender].player[0].minions[minion].id == 2) {



            if (chosen == 1) {
                //gain +3 attack
                champ.attack += 3;

            }
             if (chosen == 2) {
                //gain +3 health
                champ.health += 3;

            }

            if (chosen == 3) {
                //gain stealth
                champ.stealth = true;
            }

               if (chosen == 4) {
                //gain taunt
                champ.taunt = true;
            }

               if (chosen == 5) {
                //gain windfury
                champ.windfury = true;
            }


            
           


            champ.attack += 3;


            //gain windfury
            champ.windfury = true;


            //gain devine shield
            champ.divineshield = true;


        }

    }

   


    //call this method when you play a minion
    function ability(uint _handCardChosen, uint _posistion ) external {
        //uint position = games[msg.sender].player[0].hand.length;
        uint minionOnBoard = games[msg.sender].player[0].minions.length;
        Champs storage currentChar = games[msg.sender].player[0].hand[_handCardChosen];
        Champs[] storage myBoard = games[msg.sender].player[0].minions;
        //Champs[] memory enemyBoard = games[msg.sender].player[1].minions;



    //Defender
        if (currentChar.id == 1) {
            if ( minionOnBoard == 0) {
                //nothing
            } 
            if (minionOnBoard == 1 && _posistion == 1) { 
                myBoard[_posistion-1].attack += 1;
                myBoard[_posistion-1].health += 1;
                myBoard[_posistion-1].taunt = true;       
            }
            if (minionOnBoard == 1 && _posistion == 0) { 
                myBoard[_posistion+1].attack += 1;
                myBoard[_posistion+1].health += 1;
                myBoard[_posistion+1].taunt = true;       
            }
            if (minionOnBoard > 1 && _posistion < minionOnBoard && _posistion != 0) { 
                myBoard[_posistion-1].attack += 1;
                myBoard[_posistion-1].health += 1;
                myBoard[_posistion-1].taunt = true;

                myBoard[_posistion+1].attack += 1;
                myBoard[_posistion+1].health += 1;
                myBoard[_posistion+1].taunt = true;          
            }
               if (minionOnBoard > 1 && _posistion < minionOnBoard) { 
                myBoard[_posistion-1].attack += 1;
                myBoard[_posistion-1].health += 1;
                myBoard[_posistion-1].taunt = true;

                myBoard[_posistion+1].attack += 1;
                myBoard[_posistion+1].health += 1;
                myBoard[_posistion+1].taunt = true;          
            }
            
             if (_posistion == minionOnBoard && _posistion > minionOnBoard) { 
                myBoard[_posistion-1].attack += 1;
                myBoard[_posistion-1].health += 1;
                myBoard[_posistion-1].taunt = true;       
            }  
             if (_posistion == minionOnBoard && _posistion < minionOnBoard) { 
                myBoard[_posistion+1].attack += 1;
                myBoard[_posistion+1].health += 1;
                myBoard[_posistion+1].taunt = true;       
            }     
        }


       



    }


 


     // function showHand() external view  returns (uint[] memory){

    //     uint[] memory hand;

    //     for (uint i = 0;i < games[msg.sender].player[0].hand.length;i++){
    //         hand[i] = games[msg.sender].player[0].hand[i].id;
    //     }


    //     return hand;
    // }
   
    


    
    

}
