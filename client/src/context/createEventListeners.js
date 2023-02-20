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

//* Get battle card coordinates
const getCoords = (cardRef) => {
  const { left, top, width, height } = cardRef.current.getBoundingClientRect();

  return {
    pageX: left + width / 2,
    pageY: top + height / 2.25,
  };
};

const emptyAccount = '0x0000000000000000000000000000000000000000';

export const createEventListeners = ({ navigate, contract, provider, walletAddress, setShowAlert, player1Ref, player2Ref, setUpdateGameData,setPlayed }) => {

  // const NewPlayerEventFilter = contract.filters.NewPlayer();
  // AddNewEvent(NewPlayerEventFilter, provider, ({ args }) => {
  //   console.log('New player created!', args);

  //   if (walletAddress === args.owner) {
  //     setShowAlert({
  //       status: true,
  //       type: 'success',
  //       message: 'Player has been successfully registered',
  //     });
  //   }
  // });





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
  // localStorage.setItem('player',0);
    setShowAlert({
      status: true,
      type: 'success',
      message: 'succesfully played a minon' + args,
    });

    console.log(args)
  
});


  const NewBattleEventFilter = contract.filters.NewBattle();
  AddNewEvent(NewBattleEventFilter, provider, ({ args }) => {
    console.log('New battle started!', args, walletAddress);

    if (walletAddress.toLowerCase() === args.player1.toLowerCase() || walletAddress.toLowerCase() === args.player2.toLowerCase()) {
      navigate(`/battle/${args.battleName}`);
    }

    setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
  });

  const NewGameTokenEventFilter = contract.filters.NewGameToken();
  AddNewEvent(NewGameTokenEventFilter, provider, ({ args }) => {
    console.log('New game token created!', args.owner);

    if (walletAddress.toLowerCase() === args.owner.toLowerCase()) {
      setShowAlert({
        status: true,
        type: 'success',
        message: 'Player game token has been successfully generated',
      });

      navigate('/create-battle');
    }
  });

  const BattleMoveEventFilter = contract.filters.BattleMove();
  AddNewEvent(BattleMoveEventFilter, provider, ({ args }) => {
    console.log('Battle move initiated!', args);
    // setPlayed(true);
  });

  const RoundEndedEventFilter = contract.filters.RoundEnded();
  AddNewEvent(RoundEndedEventFilter, provider, ({ args }) => {
    console.log('Round ended!', args, walletAddress);

    setPlayed(false);
  

    for (let i = 0; i < args.damagedPlayers.length; i += 1) {
      if (args.damagedPlayers[i] !== emptyAccount) {
        if (args.damagedPlayers[i] === walletAddress) {
          sparcle(getCoords(player1Ref));
        } else if (args.damagedPlayers[i] !== walletAddress) {
          sparcle(getCoords(player2Ref));
        }
      } else {
        playAudio(defenseSound);
      }
    }

    setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
  });

  // Battle Ended event listener
  const BattleEndedEventFilter = contract.filters.BattleEnded();
  AddNewEvent(BattleEndedEventFilter, provider, ({ args }) => {
    if (walletAddress.toLowerCase() === args.winner.toLowerCase()) {
      setShowAlert({ status: true, type: 'success', message: 'You won!' });
    } else if (walletAddress.toLowerCase() === args.loser.toLowerCase()) {
      setShowAlert({ status: true, type: 'failure', message: 'You lost!' });
    }

    navigate('/create-battle');
  });
};
