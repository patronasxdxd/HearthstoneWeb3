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

export const createEventListeners = ({ navigate,Minionsplayed,setMinionsplayed, contract, provider, walletAddress, setShowAlert}) => {

 



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
      message: 'succesfully played ' + args[0].name,
    });

    setMinionsplayed(Minionsplayed+1);

    console.log(args)
  
});


const endTurnEvent = contract.filters.endTurnEvent();
AddNewEvent(endTurnEvent, provider, ({ args }) => {
  console.log('ended turn');
    setShowAlert({
      status: true,
      type: 'success',
      message: 'ended turn',
    });

    setMinionsplayed(Minionsplayed+1);
});


const attackEvent = contract.filters.attackEvent();
AddNewEvent(attackEvent, provider, ({ args }) => {
  console.log('ended attack');
    setShowAlert({
      status: true,
      type: 'success',
      message: 'attacked',
    });

    setMinionsplayed(Minionsplayed+1);
});






};
