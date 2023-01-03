// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Characters {

    struct Champs {
        uint health;
        uint attack;
        uint manaCost;
        uint id;
    }
    
    Champs private defender = Champs(1,2,1,1);
    Champs private Fletchling = Champs(3,3,3,2);
    Champs private Yeti = Champs(5,3,4,3);
    Champs private Scrab = Champs(3,2,2,4);
    Champs private Deathwing = Champs(12,12,5,5);

    
    function hehexd() external pure  returns (uint)  {
        return 5;
    }


    function getCharacter(uint id) external view returns (uint[4] memory){

       

        if (id == 1 ){
            return ([defender.attack,defender.attack,defender.manaCost,defender.id]);
        }
         if (id == 2 ){
            return ([Fletchling.attack,Fletchling.attack,Fletchling.manaCost,Fletchling.id]);
        }
         if (id == 3 ){
            return ([Yeti.attack,Yeti.attack,Yeti.manaCost,Yeti.id]);
        }
         if (id == 4 ){
            return ([Scrab.attack,Scrab.attack,Scrab.manaCost,Scrab.id]);
        }
         if (id == 5 ){
            return ([Deathwing.attack,Deathwing.attack,Deathwing.manaCost,Deathwing.id]);
        }
        
        else return ([defender.health,defender.attack,defender.manaCost,defender.id]);

    }

}