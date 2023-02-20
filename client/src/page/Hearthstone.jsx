/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../assets';

import dummyData from "../utils/dummyData";
import styles from '../styles';
import { ActionButton, Alert, Card, GameInfo, PlayerInfo,HearthstoneCard,HiddenHearthstoneCard} from '../components';
import { rsattack,rsstrenght, attackSound, rsmagic,rsrange, defenseSound,main,adventure, player01 as player01Icon, player02 as player02Icon } from '../assets';
import { playAudio } from '../utils/animation.js';
import '../cards.css';
import '../hiddencards.css'
import '../index.css'
// import { outfits } from '../assets';
import { useGlobalContext } from '../context';


const Hearthstone = () => {
  const navigate = useNavigate();
  const { contract, played,gameData,setPlayed,battleGround, walletAddress, setErrorMessage, showAlert, setShowAlert, player1Ref, player2Ref,outfit } = useGlobalContext();
  const [player2, setPlayer2] = useState({});
  const [player1, setPlayer1] = useState({});
  const { battleName } = useParams();
  const [player01hand, setPlayer01Hand] = useState([]);
  const [player02hand, setPlayer02Hand] = useState([]);

  const [player02handsize,setplayer02handsize] = useState();



  console.log("xd");

  useEffect(() => {
   
    


    const getPlayerInfo = async () => {
      try {

        console.log("xdd");
        
        let player01Address = null;
        let player02Address = null;
        
        const player01 = await contract.getPlayer(0);
        const player02 = await contract.getPlayer(1);

 
        const p1H = player01.health.toNumber();
        const p1M = player01.mana.toNumber();
        const p2M = player02.mana.toNumber();
  
        const p2H = player02.health.toNumber();


        const handsize = player01.hand.length;



        


        console.log(player01);


        let player01handd = player01.hand;

        console.log(player01.hand);
        console.log(handsize);



        setPlayer01Hand(player01handd);
        setPlayer02Hand(player02.hand);

        setplayer02handsize(player02.hand.length)
  

        setPlayer1({ ...player01, health: p1H, mana: p1M });
        setPlayer2({ ...player02, health: p2H, mana: p1M  });
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    if (contract ) getPlayerInfo();
  }, [contract, gameData, battleName]);



  const handleBattleChoice = (ground) => {
    // setBattleGround(ground.id);
    setOutfit(ground.id);

    // localStorage.setItem('battleground', ground.id);
    localStorage.setItem('outfit', ground.id);

    setShowAlert({ status: true, type: 'info', message: `${ground.name} is battle ready!` });

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };



  const endTurn = async () => {
  
    try {
      await contract.endTurn(0);

      // setPlayed(true);


      setShowAlert({
        status: true,
        type: 'info',
        message: `ended turn`,
      });
    } catch (error) {
      setErrorMessage(error);
    }


  };

  const endTurn2 = async () => {
  
    try {
      await contract.endTurn(1);

      // setPlayed(true);


      setShowAlert({
        status: true,
        type: 'info',
        message: `ended turn FOR THE BOT`,
      });
    } catch (error) {
      setErrorMessage(error);
    }


  };


  return (

    <div className={`${styles.flexBetween} ${styles.gameContainer} ${battleGround}`}>
    {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}




    <div className='hiddenHealthBar'>
    <PlayerInfo player={player2} playerIcon={player02Icon} mt />
   
    </div>

    <div className="cardshidden">
          {[...player02hand].map((player02hand, i) => (
            <HiddenHearthstoneCard card={player02hand} key={i} {...player02hand} />
          ))}
    </div>

   



    

   


    <div className={`${styles.flexCenter} flex-col my-10`}>

    <div className="flex items-center flex-row">
      <Card
        card={player2}
        title={player2?.playerName}
        cardRef={player2Ref}
        playerTwo
      />
     
   
        
   <ActionButton
   imgUrl={rsrange}
   handleClick={() => makeAMove(2)}
   restStyles="ml-6 hover:border-red-600"
 />
 </div>


{/* Temporary */}

 <br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br>
<br></br>
      

      <div className="flex items-center flex-row">
       
        <Card
          card={player1}
          
          // title={"Gilles"}
          cardRef={player1Ref}
          // restStyles="mt-3 " 
          img1={allCards[localStorage.getItem('outfit')-1]}
          
        />

        




  <div className="flex items-center flex-col">

    


{played
          ? <h2 className='font-runescape  text-[26px] text-yellow-300'> Wait for your opponent ...</h2>
          : ""
      
          
    }

    <br></br>
  
  <div className="flex items-center flex-row">
   
        
          <ActionButton
          imgUrl={rsrange}
          handleClick={() => makeAMove(2)}
          restStyles="ml-6 hover:border-red-600"
        />
         {/* <ActionButton
          imgUrl={rsmagic}
          handleClick={() => endTurn()}
          restStyles="ml-6 hover:border-yellow-400"
        />
         <ActionButton
          imgUrl={rsmagic}
          handleClick={() => endTurn2()}
          restStyles="ml-6 hover:border-yellow-400"
        /> */}

{/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={endTurn()}>
  End Turn
</button> */}

      </div>
      
    </div>
    
    </div>
    </div>

    

    <div class='cards'>
      
          {[...player01hand].map((player01hand, i) => (
           
            <HearthstoneCard card={player01hand} key={i} {...player01hand} playerTwo />
          

          ))}
    
    </div>


 
      <div className='healthbar'>

       <PlayerInfo player={player1} playerIcon={player01Icon} />
       </div>


    <GameInfo />

    
  </div>
);

};

export default Hearthstone;
