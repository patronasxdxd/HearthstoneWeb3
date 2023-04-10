import { ethers } from 'hardhat';
import {Hearthstone} from '../contracts/Hearthstone.sol'

async function main(){


    const [admin,secondPLayer] = await ethers.getSigners();

    const Contract2 = await ethers.getContractFactory("Characters");
    const contractHead2 = await Contract2.deploy();
    await contractHead2.deployed();

    console.log("characters deployed to:", contractHead2.address);

    
    const Contract = await ethers.getContractFactory("Hearthstone");
    const contractHead = await Contract.deploy(contractHead2.address);
    await contractHead.deployed();

    console.log("Hearthstone deployed to:", contractHead.address);

  const contract = (await ethers.getContractAt(
    "Hearthstone",
    contractHead.address
  )) as Hearthstone;


  await contract.createGame("patronasxd")


    await contract.endTurn(0);
  await contract.endTurn(1);
  await contract.endTurn(0);
  await contract.endTurn(1);



  // await contract.playMinion(1);
  // await contract.playMinion(2);
  // await contract.playMinion(3);

// // first parameter is the minionId second one is the player, "0" means the player and "1" for the bot

  // await contract.playerDrawCard(0);
  // await contract.playerDrawCard(0);
  // await contract.playerDrawCard(0);

  // await contract.playerDrawCard(1);
  // await contract.playerDrawCard(1);
  // await contract.playerDrawCard(1);

 

  

//   // console.log(await contract.getMinionById(1))

  // await contract.playMinionById(3,0);
  // await contract.playMinionById(11,0);
  // await contract.playMinionById(4,0);


  // await contract.playMinionById(3,1);
  // await contract.playMinionById(11,1);
  // await contract.playMinionById(4,1);

  // await contract.endTurn(0);
  // await contract.endTurn(1);

//   console.log("card in hand 1: "  + await contract.showcard(0));
//   console.log("card in hand 2: " + await contract.showcard(1));
//   console.log("card in hand 3: " + await contract.showcard(2));


//   console.log("hand size is: " + await contract.handSize());
  
//   console.log("player health: "+  await contract.getHealthPlayer());

//   // // first param is your minion second target 
  // await contract.attack(0,1,0,0);


//   console.log("opponent health: "+  await contract.getHealthBot());
//   console.log("minions size: " + await contract.boardSize(1));

//   console.log("  ");


//   console.log("Player: board minion 1: " + await contract.showboardplace(0,0));
//   console.log("Player: board minion 2: " + await contract.showboardplace(1,0));
//   console.log("Player: board minion 3: " + await contract.showboardplace(2,0));

//   // await contract.ability(0,0);


//   // console.log("place 1: " + await contract.showboardplace(0));
//   // console.log("place 2: " + await contract.showboardplace(1));
//   // console.log("place 3: " + await contract.showboardplace(2));

//   // await contract.playMinionById(12,0);
//   console.log("minions size: " + await contract.boardSize(0));

//   // console.log("place 4: " + await contract.showboardplace(3));
//   // await contract.trigger(3,1);


//   // console.log("place 1: " + await contract.showboardplace(0));
//   // console.log("place 2: " + await contract.showboardplace(1));
//   // console.log("place 3: " + await contract.showboardplace(2));

//   //bot is gonna have minions

//   // await contract.playMinionById(12,1);
//   // await contract.playMinionById(12,1);
//   // await contract.playMinionById(12,1);


//   console.log("Bot: board minion 1: " + await contract.showboardplace(0,1));
//   console.log("Bot: board minion 2: " + await contract.showboardplace(1,1));
//   console.log("Bot: board minion 3: " + await contract.showboardplace(2,1));

// //   console.log(await contract.getTurn())
// // await contract.endTurn(0)
// //   console.log(await contract.getTurn())
// // await contract.endTurn(1)
// //   console.log(await contract.getTurn())
// //   await contract.endTurn(0)
// //   console.log(await contract.getTurn())

// console.log("opponent health: "+  await contract.getHealthBot());

// await contract.attack(0,666,0,0);
// console.log("opponent health: "+  await contract.getHealthBot());
// await contract.endTurn(0);
// await contract.endTurn(1);


// // await contract.attack(0,0,0,2);

// console.log("opponent health: "+  await contract.getHealthBot());


// console.log("Bot: board minion 1: " + await contract.showboardplace(0,1));
// console.log("Bot: board minion 2: " + await contract.showboardplace(1,1));
// // console.log("Bot: board minion 3: " + await contract.showboardplace(2,1));


// // console.log("card in hand 1: "  + await contract.showcard(0));
// // console.log("minions size: " + await contract.boardSize());

// // console.log("hand size is: " + await contract.handSize());
// //   await contract.playMinion(0,1);
// // console.log("hand size is: " + await contract.handSize());
// // console.log("minions size: " + await contract.boardSize());


// await contract.drawCards(0);
// await contract.drawCards(1);

// console.log("hand size is: " + await contract.handSize());


// console.log("minions size: " + await contract.boardSize(0));
// console.log("minions bot size: " + await contract.boardSize(1));


// console.log("Player: board minion 1: " + await contract.showboardplace(0,0));
// console.log("Bot: board minion 1: " + await contract.showboardplace(0,1))
// console.log("attacking")
// // await contract.attack(0,0,0)
// await contract.attack(0,0,0,2)
// await contract.endTurn(0);
// await contract.endTurn(1);

// console.log("Player: board minion 1: " + await contract.showboardplace(0,0));
// console.log("Bot: board minion 1: " + await contract.showboardplace(0,1));


// console.log("minions size: " + await contract.boardSize(1));
// console.log("bot minions size: " + await contract.boardSize(1));




// console.log("Player: board minion 1: " + await contract.showboardplace(0,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(1,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(2,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(3,1));

// // await contract.ability(1,0,1);


// console.log("Player: board minion 1: " + await contract.showboardplace(0,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(1,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(2,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(3,1));
// //until here


// console.log("player health: "+  await contract.getHealthPlayer());

//   // // first param is your minion second target 
//   // await contract.attack(0,8);

//   console.log("opponent health: "+  await contract.getHealthBot());
//   console.log("player mana: "+  await contract.getPlayer(0).mana);


//   await contract.playMinionById(5,0);
//   await contract.clear();

// //   console.log("Player: board minion 1: " + await contract.showboardplace(0,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(1,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(2,1));
// // console.log("Player: board minion 1: " + await contract.showboardplace(3,1));





// await contract.playMinionById(12,1);
// await contract.endTurn(0);
// await contract.endTurn(1);

// console.log("Player: board minion 1: " + await contract.showboardplace(0,1));


} 

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
