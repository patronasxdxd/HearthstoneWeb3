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

    Champs[] camps;



    Champs private Defender = Champs(1,2,1,1,"defender");
    Champs private Fletchling = Champs(3,3,3,2,"fletchling");
    Champs private Yeti = Champs(5,3,4,3,"Yeti");
    Champs private Scrab = Champs(3,2,2,4,"Scrab");
    Champs private Deathwing = Champs(12,12,5,5,"Deathwing");
    Champs public Invincible = Champs(8,4,7,6,"invincible");
    Champs public Brian = Champs(4,2,3,7,"Brian BronzeBeard");
  
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