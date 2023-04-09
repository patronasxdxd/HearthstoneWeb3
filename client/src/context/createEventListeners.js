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
  setMinionsplayed(Minionsplayed+=1);
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
AddNewEvent(minonplayed, provider, () => {
  setMinionsplayed(Minionsplayed+=1);
  console.log('minion played');
    setShowAlert({
      status: true,
      type: 'success',
      message: 'succesfully played ',
    });

  
  
});


const endTurnEvent = contract.filters.endTurnEvent();
AddNewEvent(endTurnEvent, provider, () => {
  setMinionsplayed(Minionsplayed+=1);
  console.log('ended turn');
    setShowAlert({
      status: true,
      type: 'success',
      message: 'ended turn',
    });

    
});


const attackEvent = contract.filters.attackEvent();
AddNewEvent(attackEvent, provider, () => {
  setMinionsplayed(Minionsplayed+=1);
  console.log('ended attack');
    setShowAlert({
      status: true,
      type: 'success',
      message: 'attacked',
    });
});


// const AsleepEvent = contract.filters.MinionAsleepError();
// AddNewEvent(AsleepEvent, provider, () => {
//   console.log('Still asleep');
//     setShowAlert({
//       status: true,
//       type: 'success',
//       message: 'Minion is still asleep',
//     });
// });






};
