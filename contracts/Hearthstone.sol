// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */



contract Hearthstone {

    struct Player {
        string username;
        uint health;
        uint mana;
        Champs[7] minions;
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


        player2.username = "Bot";
        player2.health = 30;
        player2.mana = 1;
        
    }


    function playMinion(uint minionId) external {
        Game storage game = games[msg.sender];

        game.player[0].minions[0] = Champs(5,5,1,1); 

        

    }

    function getBoard() external view returns (uint)  {

        return games[msg.sender].player[0].minions[0].id;
    }

    
    

}
