// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Characters {

    struct Champs {
        uint health;
        uint attack;
        uint manaCost;
        uint id;
        string name;
        string description;
    }

    Champs[] camps;






    Champs private Defender = Champs(1,2,1,1,"defender","Give adjusted minions +1/+1 and taunt");
    Champs private Fletchling = Champs(3,3,3,2,"fletchling","After this minon attacks a hero, Adapt");
    Champs private Yeti = Champs(5,3,4,3,"Yeti","");
    Champs private Scrab = Champs(3,2,2,4,"Scrab","Deathrattle: gain 2 armor");
    Champs private Deathwing = Champs(12,12,5,5,"Deathwing","Battlecry: Destroy all other minions and discard your hand");
    Champs public Invincible = Champs(8,4,7,6,"invincible","Reborn,Battlecry and Deathrattle: Give a random friendly minion +5/+5 and Taunt");
    Champs public Brian = Champs(4,2,3,7,"Brian BronzeBeard","Your battlecry trigger twice");
  
    constructor(){
          camps.push(Defender);
             camps.push(Fletchling);
                camps.push(Yeti);
                   camps.push(Scrab);
                      camps.push(Deathwing);
                         camps.push(Invincible);
                          camps.push(Brian);
    }

    function getCharacter(uint id) external view returns (uint,uint,uint,uint,string memory){
        return seperateValues(id);
    }

    function seperateValues(uint _x) internal view  returns (uint,uint,uint,uint,string memory) {
        Champs memory x = camps[_x];
        return (x.health,x.attack,x.manaCost,x.id,x.name);
    }

    


    

}