// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Characters {

    struct Champs {
        uint8 health;
        uint8 attack;
        uint8 manaCost;
        uint8 id;
        string name;
        string description;
        bool taunt;
        bool windfury;
        bool divineshield;
        bool stealth;
        bool poisonious;
        bool asleep;
    }

    mapping(uint => Champs) public champsMap;

   constructor() public {
    champsMap[0] = Champs(1, 2, 1, 1, "Defender", "Give adjusted minions +1/+1 and taunt", false, false, false, false, false, true);
    champsMap[1] = Champs(3, 3, 3, 2, "Fletchling", "After this minion attacks a hero, Adapt", false, false, false, false, false, true);
    champsMap[2] = Champs(5, 3, 4, 3, "Yeti", "", false, false, false, false, false, true);
    champsMap[3] = Champs(3, 2, 2, 4, "Scrab", "Deathrattle: gain 2 armor", false, false, false, false, false, true);
    champsMap[4] = Champs(12, 12, 10, 5, "Deathwing", "Battlecry: Destroy all other minions and discard your hand", false, false, false, false, false, true);
    champsMap[5] = Champs(4, 5, 7, 6, "Invincible", "Reborn, Battlecry and Deathrattle: Give a random friendly minion +5/+5 and Taunt", false, false, false, false, false, true);
    champsMap[6] = Champs(4, 2, 3, 7, "Brian BronzeBeard", "Your battlecry trigger twice", false, false, false, false, false, true);
    champsMap[7] = Champs(2, 3, 2, 8, "Shrinkmeister", "Give a minion -2 Attack", false, false, false, false, false, true);
    champsMap[8] = Champs(4, 1, 2, 9, "Crazed Wretch", "Has +2 Attack and Charge while damaged", false, false, false, false, false, true);
    champsMap[9] = Champs(2, 2, 2, 10, "Crazed Alchemist", "Battlecry: Swap the Attack and Health of a minion", false, false, false, false, false, true);
    champsMap[10] = Champs(3, 2, 1, 11, "Zombie Chow", "Deathrattle: Restore 5 Health to the enemy Hero", false, false, false, false, false, true);
    champsMap[11] = Champs(7, 7, 8, 12, "Gruul", "at the end of each turn gain +1/+1", false, false, false, false, false, true);
    champsMap[12] = Champs(2, 2, 3, 13, "Spawn of N'Zoth", "Deathrattle: give your minions +1/+1", false, false, false, false, false, true);
   }

 

 function getCharacter(uint256 id) external view returns (uint8,uint8,uint8,uint8,string memory,string memory, bool,bool,bool,bool,bool,bool){
        return seperateValues(id);
    }

 function getNewChampId(uint8 _id) external view returns (uint8, uint8){
      Champs memory x = champsMap[_id];
        return (x.id,x.manaCost);
    }

    function seperateValues(uint _x) internal view  returns (uint8,uint8,uint8,uint8,string memory,string memory,bool,bool,bool,bool,bool,bool) {
        Champs memory x = champsMap[_x];
        return (x.health,x.attack,x.manaCost,x.id,x.name,x.description,x.taunt,x.windfury,x.divineshield,x.stealth,x.poisonious,x.asleep);
    }

}