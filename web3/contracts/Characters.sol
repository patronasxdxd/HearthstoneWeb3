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

    Champs[] camps;






    Champs private Defender = Champs(1,2,1,1,"defender","Give adjusted minions +1/+1 and taunt",false,false,false,false,false,true);
    Champs private Fletchling = Champs(3,3,3,2,"fletchling","After this minon attacks a hero, Adapt",false,false,false,false,false,true);
    Champs private Yeti = Champs(5,3,4,3,"Yeti","",false,false,false,false,false,true);
    Champs private Scrab = Champs(3,2,2,4,"Scrab","Deathrattle: gain 2 armor",false,false,false,false,false,true);
    Champs private Deathwing = Champs(12,12,5,5,"Deathwing","Battlecry: Destroy all other minions and discard your hand",false,false,false,false,false,true);
    Champs public Invincible = Champs(4,5,7,6,"invincible","Reborn,Battlecry and Deathrattle: Give a random friendly minion +5/+5 and Taunt",false,false,false,false,false,true);
    Champs public Brian = Champs(4,2,3,7,"Brian BronzeBeard","Your battlecry trigger twice",false,false,false,false,false,true);
    Champs public Shrinkmeister = Champs(2,3,2,8,"Shrinkmeister","Give a minion -2 Attack",false,false,false,false,false,true);
    Champs public CrazedWretch = Champs(4,1,2,9,"Crazed Wretch","Has +2 Attack and Charge while damaged",false,false,false,false,false,true);
    Champs public CrazedAlchemist = Champs(2,2,2,10,"Crazed Alchemist","Battlecry: Swap the Attack and Health of a minion",false,false,false,false,false,true);
    Champs public ZombieChow = Champs(3,2,1,11,"Zombie Chow","Deathrattle: Restore 5 Health to the enemy Hero",false,false,false,false,false,true);
    Champs public Gruul = Champs(7,7,8,12,"Gruul","at the end of each turn gain +1/+1",false,false,false,false,false,true);
    Champs public SpawnOfNzoth = Champs(2,2,3,13,"Spawn of N'Zoth","Deathrattle: give your minions +1/+1",false,false,false,false,false,true);
    Champs public LeperGnome = Champs(1,2,1,14,"Leper Gnome","Deathrattle: Deal 2 damage to the enemy hero",false,false,false,false,false,true);
    Champs public DerangedDocter = Champs(8,8,8,15,"Deranged Doctor","Deathrattle: Restore 8 health to your hero",false,false,false,false,false,true);
    Champs public Mistress = Champs(2,2,1,16,"Mistress of Mixtures","Deathrattle: Restore 4 healt to each hero",false,false,false,false,false,true);
    Champs public Grizzly = Champs(3,3,3,17,"Ironfur Grizzly","taunt",true,false,false,false,false,true);



  
    constructor(){
          camps.push(Defender);
             camps.push(Fletchling);
                camps.push(Yeti);
                   camps.push(Scrab);
                      camps.push(Deathwing);
                         camps.push(Invincible);
                            camps.push(Brian);
                                 camps.push(Shrinkmeister);
                                      camps.push(CrazedWretch);
                                           camps.push(CrazedAlchemist);
                                             camps.push(ZombieChow);
                                                  camps.push(Gruul);
                                                       camps.push(SpawnOfNzoth);
                                                        //   camps.push(LeperGnome);
                                                        //      camps.push(DerangedDocter);
                                                        //        camps.push(Mistress);
                                                        //             camps.push(Grizzly);
    }

    function getCharacter(uint256 id) external view returns (uint8,uint8,uint8,uint8,string memory,string memory, bool,bool,bool,bool,bool,bool){
        return seperateValues(id);
    }



    function seperateValues(uint _x) internal view  returns (uint8,uint8,uint8,uint8,string memory,string memory,bool,bool,bool,bool,bool,bool) {
        Champs memory x = camps[_x];
        return (x.health,x.attack,x.manaCost,x.id,x.name,x.description,x.taunt,x.windfury,x.divineshield,x.stealth,x.poisonious,x.asleep);
    }

    


    

}