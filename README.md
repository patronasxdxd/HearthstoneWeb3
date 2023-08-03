# HearthstoneWeb3

Hi :D

## introduction

This is a game inspired by Hearthstone from Blizzard

I've used a react framework with solidity to deploy a contract with the basic game logic.
With threeJS it allowed me to make it 3d and more enjoyable.

although it's easy to make the game involve another person as an opponent in this situation it would be more difficult to demonstrate the game itself,
I have made another game with a Runescape theme that is with multiple people in a single game.

## Video Demonstration

Please watch the video to get a full understanding 
[![Click to Watch the Video](https://img.youtube.com/vi/tCeUu5a_mSk/0.jpg)](https://www.youtube.com/watch?v=tCeUu5a_mSk)

https://www.youtube.com/watch?v=tCeUu5a_mSk


## Installation

-  save the project on your desktop and open it in for example visual studio code

- `cd web3`.




change in the hardhat.config.ts the account to your private key, and make sure you have efficient funds from the faucet. the daily amount is plenty enough

```

  networks: {
  
    fuji: {
    
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      
      gasPrice: 225000000000,
      
      chainId: 43113,
      
      accounts: ['PUT YOUR PRIVATE CODE HERE'],
      
    }
```
  
if you want to run it on the avalanche network you can simply type in the terminal after, (make sure you are in the /web3 folder)

- `yarn hardhat run scripts/deployHsBasic.ts --network fuji`.


output:
```

Compiled 2 Solidity files successfully

characters deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

Hearthstone deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

✨  Done in 33.43s.

```


replace in the index.js inside the contract folder with the output of the addresses in the file

```
import contract from './Hearthstone.json';
import contractChar from './Characters.json';




export const CHARSADDRESS = '0x795d893ba2921d5aAF3198de24F6EFb8453EBFDD';
export const ADDRESS = '0xEB38a55907b7D6D327AE88fB270a16f7c473612c';




export const { abi: ABI } = contract;
export const {abi: ABICHAR} = contractChar;
```


and finally, run the command in the client folder

```
cd ../client

npm run dev

enjoy :D

```

## Features

- creating a game on a different account
- You're able to draw cards
- attack cards and enemy face
- play a card on your board
- end turn
- some characters have special movements, such as Deathwing that destroys the whole board when played
- mana cost
- rotate the map
  

Gilles Zwijsen

Gilleszwijsen@gmail.com

https://gilleszwijsen.vercel.app/
