import { ethers } from 'ethers';

import { ABI } from '../contract';
import { playAudio, sparcle } from '../utils/animation.js';
import { defenseSound } from '../assets';
import { GlobalContextProvider } from '.';




const AddNewEvent = (eventFilter, provider, cb) => {
  provider.removeListener(eventFilter);

  provider.on(eventFilter, (logs) => {
    const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(logs);

    cb(parsedLog);
  });
};



// const emptyAccount = '0x0000000000000000000000000000000000000000';

export const createEventListeners = ({ navigate, contract, provider, walletAddress, setShowAlert}) => {

 



  const drawCard = contract.filters.drawn();
AddNewEvent(drawCard, provider, ({ args }) => {
  console.log('card drawm', args);
  // localStorage.setItem('player',0);
    setShowAlert({
      status: true,
      type: 'success',
      message: 'succesfully drawn a card' + args,
    });

    console.log(args)
  
});


const minonplayed = contract.filters.playMinionEvent();
AddNewEvent(minonplayed, provider, ({ args }) => {
  console.log('minion played', args);
    setShowAlert({
      status: true,
      type: 'success',
      message: 'succesfully played ' + args.name,
    });

    // minionsplayed(false);

    console.log(args)
  
});






};
