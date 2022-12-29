import { ethers } from 'hardhat';
import {Storage} from '../contracts/storage.sol'

async function main(){


    const [admin,secondPLayer] = await ethers.getSigners();
    
    const Storage = await ethers.getContractFactory("Storage");
    const greeter = await Storage.deploy();
    await greeter.deployed();

    console.log("greeter deploye dto:", greeter.address);



  const contract = (await ethers.getContractAt(
    "Storage",
    greeter.address
  )) as Storage;


  await contract.createAccount("Gilles");
  await contract.bet(1,5);
  console.log(await contract.viewAccount());
  await contract.bet(1,20);
  console.log(await contract.viewAccount());
  await contract.bet(2,50);
  console.log(await contract.viewAccount());






}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
