// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */


import "contracts/Characters.sol";

//attack 1,2,3,4,5,6,7 attacks enemy board 8 attacks face

contract Hearthstone {


    Characters public charC;
    uint nonce = 0;
    address owner;


constructor (address _address) {
    owner = msg.sender;
    charC = Characters(_address);
}


//   enum gameStatus{ PENDING, STARTED, ENDED }

    struct Player {
        string username;
        uint health;
        uint mana;
        uint unspendMana;
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
        // gameStatus gamestatus;
    }   

    mapping (address => Game) public games;
    mapping (address => string ) public usernames;
    uint private gameCount = 0;
    uint8 private currentPlayerTurn = 0; 
    //if true than game is running
    bool private gameStatus = true;
    bool private victory = false;


    

    function getPlayer(uint _player) external view returns (Player memory) {
          return games[msg.sender].player[_player];
    }

     function getGame(uint _player) external view returns (Game memory) {
          return games[msg.sender];
    }



    function getTurn() external view returns (uint8)  {
        return currentPlayerTurn;
    }

    function endTurn(uint _player) external {
        require(currentPlayerTurn ==  _player,"its not your turn");
        emit endTurnEvent();


        if (games[msg.sender].player[_player].hand.length < 10){
        games[msg.sender].player[_player].hand.push( drawCard());
        }


        if (games[msg.sender].player[_player].mana < 10){
            games[msg.sender].player[_player].mana += 1;
        }
        games[msg.sender].player[_player].unspendMana = games[msg.sender].player[_player].mana;

        
        if (currentPlayerTurn == 0) {
            currentPlayerTurn = 1;
        }else currentPlayerTurn = 0;
    }



    function createGame(string memory _username) external {

        Player storage player1 = games[msg.sender].player[0];
        Player storage player2 = games[msg.sender].player[1];


        player1.username = _username;
        player1.health = 30;
        player1.mana = 5;
        player1.unspendMana = 5;


        player2.username = "Bot";
        player2.health = 30;
        player2.mana = 5;
        player2.unspendMana = 5;


        emit gameCreatedEvent();
        
    }


function drawCard() internal returns (Champs memory){

    (uint a,uint b ,uint c,uint d,string memory e, string memory f, bool g,bool h, bool i,bool j,bool k) = charC.getCharacter(_createRandomNum());
         Champs memory cp = Champs(a,b,c,d,e,f,g,h,i,j,k);
        return cp;
}


function drawCards(uint _player) external {

     for (uint j = 0; j < 6; j++) { 
             games[msg.sender].player[_player].hand.push( drawCard());
      }

  
     
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

    function playerDrawCard ( uint _player) external {
        games[msg.sender].player[_player].hand.push( drawCard());
        emit drawn(drawCard());

    }

    function playMinion( uint _player, uint _handIndex) external {
        

        Game storage game = games[msg.sender];


        require(games[msg.sender].player[_player].unspendMana >= game.player[_player].hand[_handIndex].manaCost, "not enough mana");

        games[msg.sender].player[_player].unspendMana -= game.player[_player].hand[_handIndex].manaCost;


    
        if (game.player[_player].hand[_handIndex].id == 5) {    

                     delete games[msg.sender].player[0].minions;
                    delete games[msg.sender].player[1].minions;
                 
        }

        //add minion from hand to board
        game.player[_player].minions.push(game.player[_player].hand[_handIndex]);


        //remove card from hand
         for (uint i = 0; i <  games[msg.sender].player[_player].hand.length -1; i++) {
                     games[msg.sender].player[_player].hand[i] = games[msg.sender].player[_player].hand[i + 1];
                 }
                games[msg.sender].player[_player].hand.pop();
        emit playMinionEvent(game.player[_player].hand[_handIndex]);
  
    }

    function clear() external {
           delete games[msg.sender].player[0].minions;
            delete games[msg.sender].player[1].minions;
    }

    function playMinionById(uint minionId,uint _player) external {
        Game storage game = games[msg.sender];

       
        game.player[_player].minions.push(getMinionById(minionId) ); 
    }


    function getMinionById(uint minionId) public returns (Champs memory) {
         (uint a,uint b ,uint c,uint d,string memory e, string memory f, bool g,bool h, bool i,bool j,bool k) = charC.getCharacter(minionId);
         Champs memory cp = Champs(a,b,c,d,e,f,g,h,i,j,k);
        return cp;
    }

   

    function getBoard(uint _player) external view returns (Champs[] memory)  {

        return games[msg.sender].player[_player].minions;
    }


    function getHand(uint _player) external view returns (Champs[] memory)  {

        return games[msg.sender].player[_player].hand;
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

     function boardSize(uint _player) external view returns (uint) {
       return games[msg.sender].player[_player].minions.length;
    }

   function getHealthBot() external view returns (uint) {
       return games[msg.sender].player[1].health;
    }

    function getHealthPlayer() external view returns (uint) {
       return games[msg.sender].player[0].health;
    }

    // function deleteMinion(uint index, uint _player) internal {


    //     for (uint i = index; i< data.length - 1; i++) {
    //         data[i] = data[i + 1];
    //     }
    //     data.pop();

    // }


//if normal attack chosen is always 0
    function attack(uint minion, uint target, uint _player, uint _chosen) public{
        // require(target < games[msg.sender].player[_player].minions.length-1,"targe doesnt exist");
        emit attackEvent();

        uint enemy;
        if (_player == 0 ){
              enemy = 1;
        } else{
             enemy = 0;
        }

    
        uint _attack = games[msg.sender].player[_player].minions[minion].attack;
       // uint _attackEnemy = games[msg.sender].player[enemy].minions[target].attack;

        //hit enemy face/Hero
       if (target == 666) {
            if (games[msg.sender].player[enemy].health - _attack <= 0){ gameStatus = false; victory = true; }
           else{    games[msg.sender].player[enemy].health = games[msg.sender].player[enemy].health - _attack;}
        }
        //else hit minion
       else {
                   uint _attackEnemy = games[msg.sender].player[enemy].minions[target].attack;

           if ( games[msg.sender].player[enemy].minions[target].health <= _attack){
                 for (uint i = target; i < games[msg.sender].player[enemy].minions.length -1; i++) {
                     games[msg.sender].player[enemy].minions[i] = games[msg.sender].player[enemy].minions[i + 1];
                 }
                games[msg.sender].player[enemy].minions.pop();
                deathRattle(enemy,_player,target);
           }else{
                games[msg.sender].player[enemy].minions[target].health = games[msg.sender].player[enemy].minions[target].health- _attack;
           }

             if ( games[msg.sender].player[_player].minions[minion].health <= _attackEnemy )
               {
                    for (uint i = minion; i < games[msg.sender].player[_player].minions.length -1; i++) {
                     games[msg.sender].player[_player].minions[i] = games[msg.sender].player[_player].minions[i + 1];
                 }
                games[msg.sender].player[_player].minions.pop();
                deathRattle(_player,enemy,minion);

                }
                else{
                     games[msg.sender].player[_player].minions[minion].health = games[msg.sender].player[_player].minions[minion].health - _attackEnemy;
                    
                    if (games[msg.sender].player[_player].minions[minion].id == 2) {
                     trigger(minion,_chosen,_player);}
                }

           
           }

        //check fletchling

        // if (games[msg.sender].player[1].minions[minion].id == 2) {
        //     trigger(minion);

        // }

    }


   

    function battleCryWithChooseOption(uint minion, uint target,uint chosen) external{

    }


    

//chosen means what position
    function trigger(uint  minion, uint chosen, uint player ) public {

        Champs storage champ = games[msg.sender].player[player].minions[minion];
        //fletching 3 things shown and has to pick 1 every time he attacks;
        if (games[msg.sender].player[player].minions[minion].id == 2) {
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

 

       function deathRattle(uint _player, uint _enemy, uint minion) internal {
         Champs storage champ = games[msg.sender].player[_player].minions[minion];
        //fletching 3 things shown and has to pick 1 every time he attacks;
        emit deathRattleEvent(_player,minion);

        if (champ.id == 4) {
            //gain 2 armor
            games[msg.sender].player[_player].health += 2;
        }

        if (champ.id == 11) {
            //gain heal enemy 5 health
            games[msg.sender].player[_enemy].health += 5;
        }

        if (champ.id == 14) {
            //deal 2 damage to enemy hero
            if (games[msg.sender].player[_enemy].health - 2  <= 0){ gameStatus = false; victory = true; }
            else{ games[msg.sender].player[_enemy].health -= 2;}
        }

         if (champ.id ==  13) {
            //give your minions +1/+1

              for (uint i = 0; i <  games[msg.sender].player[_player].minions.length -1; i++) {
                     games[msg.sender].player[_player].minions[i].health += 1;
                     games[msg.sender].player[_player].minions[i].attack += 1;

            }
        }

         if (champ.id == 15) {
             // Restore 8 health to your hero
               games[msg.sender].player[_player].health += 8;
         }

           if (champ.id == 16) {
             // Restore 4 health to both hero
               games[msg.sender].player[_player].health += 4;
                games[msg.sender].player[_player].health += 4;

         }





       }


    //call this method when you play a minion
    function ability(uint _handCardChosen, uint _posistion, uint _player ) external {

        uint minionOnBoard = games[msg.sender].player[_player].minions.length;
        Champs storage currentChar = games[msg.sender].player[_player].hand[_handCardChosen];
        Champs[] storage myBoard = games[msg.sender].player[_player].minions;
        //Champs[] memory enemyBoard = games[msg.sender].player[1].minions;


    //position 0 == left
    // position 1 == right
    
    //Defender
        if (currentChar.id == 1) {
            if ( minionOnBoard == 0) {
                //nothing
            } 
            else{
                 if ( _posistion == 1) { 
                myBoard[_posistion-1].attack += 1;
                myBoard[_posistion-1].health += 1;
                myBoard[_posistion-1].taunt = true;       
            }
            if ( _posistion == 0) { 
                myBoard[_posistion+1].attack += 1;
                myBoard[_posistion+1].health += 1;
                myBoard[_posistion+1].taunt = true;       
            }
            }
            // if (minionOnBoard > 1 && _posistion < minionOnBoard && _posistion != 0) { 
            //     myBoard[_posistion-1].attack += 1;
            //     myBoard[_posistion-1].health += 1;
            //     myBoard[_posistion-1].taunt = true;

            //     myBoard[_posistion+1].attack += 1;
            //     myBoard[_posistion+1].health += 1;
            //     myBoard[_posistion+1].taunt = true;          
            // }
            //    if (minionOnBoard > 1 && _posistion < minionOnBoard) { 
            //     myBoard[_posistion-1].attack += 1;
            //     myBoard[_posistion-1].health += 1;
            //     myBoard[_posistion-1].taunt = true;

            //     myBoard[_posistion+1].attack += 1;
            //     myBoard[_posistion+1].health += 1;
            //     myBoard[_posistion+1].taunt = true;          
            // }
            
            //  if (_posistion == minionOnBoard && _posistion > minionOnBoard) { 
            //     myBoard[_posistion-1].attack += 1;
            //     myBoard[_posistion-1].health += 1;
            //     myBoard[_posistion-1].taunt = true;       
            // }  
            //  if (_posistion == minionOnBoard && _posistion < minionOnBoard) { 
            //     myBoard[_posistion+1].attack += 1;
            //     myBoard[_posistion+1].health += 1;
            //     myBoard[_posistion+1].taunt = true;       
            // }     
        }


        


       



    }


event drawn(Champs str);
event playMinionEvent(Champs str);
event endTurnEvent();
event gameCreatedEvent();
event deathRattleEvent(uint player, uint minion );
event attackEvent();
    


}
