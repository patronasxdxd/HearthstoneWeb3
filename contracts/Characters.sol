// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Characters {

    struct Champs {
        uint health;
        uint attack;
        uint manaCost;
        uint id;
        string name;
    }
    
    Champs private defender = Champs(1,2,1,1,"defender");
    Champs private Fletchling = Champs(3,3,3,2,"fletchling");
    Champs private Yeti = Champs(5,3,4,3,"Yeti");
    Champs private Scrab = Champs(3,2,2,4,"Scrab");
    Champs private Deathwing = Champs(12,12,5,5,"Deathwing");

    
 


    function getCharacter(uint id) external view returns (uint,uint,uint,uint,string memory){

       

        if (id == 1 ){
            return (defender.attack,defender.attack,defender.manaCost,defender.id,defender.name);
        }
         if (id == 2 ){
            return (Fletchling.attack,Fletchling.attack,Fletchling.manaCost,Fletchling.id,Fletchling.name);
        }
         if (id == 3 ){
            return (Yeti.attack,Yeti.attack,Yeti.manaCost,Yeti.id,Yeti.name);
        }
         if (id == 4 ){
            return (Scrab.attack,Scrab.attack,Scrab.manaCost,Scrab.id,Scrab.name);
        }
         if (id == 5 ){
            return (Deathwing.attack,Deathwing.attack,Deathwing.manaCost,Deathwing.id,Deathwing.name);
        }

        
        else return (defender.health,defender.attack,defender.manaCost,defender.id,defender.name);

    }

}