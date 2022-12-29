import { ethers } from 'hardhat';
import {HeadOrTails} from '../contracts/HeadOrTails.sol'

async function main(){


    const [admin,secondPLayer] = await ethers.getSigners();
    
    const Contract = await ethers.getContractFactory("HeadOrTails");
    const contractHead = await Contract.deploy();
    await contractHead.deployed();

    console.log("HeadOrTails deployed to:", contractHead.address);



  const contract = (await ethers.getContractAt(
    "HeadOrTails",
    contractHead.address
  )) as HeadOrTails;


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
