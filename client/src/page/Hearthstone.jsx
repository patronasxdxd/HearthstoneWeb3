/* eslint-disable prefer-destructuring */
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../assets';

import dummyData from "../utils/dummyData";
import styles from '../styles';
import { ActionButton, Alert, Card, GameInfo, PlayerInfo,HearthstoneCard,HiddenHearthstoneCard,Board,} from '../components';
import { rsattack,rsstrenght, attackSound, rsmagic,rsrange, defenseSound,main,adventure, player01 as player01Icon, player02 as player02Icon } from '../assets';
import { playAudio } from '../utils/animation.js';
import '../cards.css';
import '../hiddencards.css'
import '../index.css'
// import { outfits } from '../assets';
import { useGlobalContext } from '../context';
import { Model } from '../components/Model';
import { Canvas,useThree } from "@react-three/fiber";



import Controls from './Controls';


const Hearthstone = () => {
  const navigate = useNavigate();
  const { contract, played,gameData,setPlayed,Minionsplayed,setMinionsplayed,battleGround, walletAddress, setErrorMessage, showAlert, setShowAlert, player1Ref, player2Ref,outfit, } = useGlobalContext();
  const [player2, setPlayer2] = useState({});
  const [player1, setPlayer1] = useState({});
  const { battleName } = useParams();
  const [player01hand, setPlayer01Hand] = useState([]);
  const [player02hand, setPlayer02Hand] = useState([]);
  const [player01board, setPlayer01board] = useState([]);
  const [player02board, setPlayer02board] = useState([]);
  const Current = localStorage.getItem("currentCard");


  const [showMesh1, setShowMesh1] = useState(false);
  const [showMesh2, setShowMesh2] = useState(false);
  const [showMesh3, setShowMesh3] = useState(false);
  const [showMesh4, setShowMesh4] = useState(false);
  const [showMesh5, setShowMesh5] = useState(false);
  const [showMesh6, setShowMesh6] = useState(false);
  const [showMesh7, setShowMesh7] = useState(false);
  const [showMesh8, setShowMesh8] = useState(false);
  const [showMesh9, setShowMesh9] = useState(false);
  const [showMesh10, setShowMesh10] = useState(false);
  const [showMesh11, setShowMesh11] = useState(false);
  const [showMesh12, setShowMesh12] = useState(false);
  const [showMesh13, setShowMesh13] = useState(false);
  const [showMesh14, setShowMesh14] = useState(false);
  const [player02handsize,setplayer02handsize] = useState();





  useEffect(() => {
   
    
 


    const getPlayerInfo = async () => {
      try {

        console.log("xdd");
        
        let player01Address = null;
        let player02Address = null;
        
        const player01 = await contract.getPlayer(0);
        const player02 = await contract.getPlayer(1);

 
        const p1H = player01.health.toNumber();
        const p1M = player01.unspendMana.toNumber();
        const p1Ma = player01.unspendMana.toNumber();
        const p2M = player02.mana.toNumber();
        const p2Ma = player02.unspendMana.toNumber();

  
        const p2H = player02.health.toNumber();

        console.log(player01.minions)
        console.log(player02.minions)


        const handsize = player01.hand.length;

   
        console.log("isytrue;")

        if ( localStorage.getItem("currentCard") === null) {
          console.log("nulleriono")

        }
        else{
          console.log("not null")
        
        }
        let player01handd = player01.hand;

        setPlayer01Hand(player01handd);
        setPlayer02Hand(player02.hand);
        setPlayer01board(player01.minions);
        setPlayer02board(player02.minions);
       
        setplayer02handsize(player02.hand.length)
  

        setPlayer1({ ...player01, health: p1H, mana: p1M });
        setPlayer2({ ...player02, health: p2H, mana: p2M  });


        console.log("player");
        console.log(player01);
        console.log(player02);

      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    if (contract ) getPlayerInfo();
  }, [contract, gameData, battleName,Current,Minionsplayed]);


  useEffect(() => { 
    console.log("bigfdi");

  }, [Minionsplayed]);

  const handleBattleChoice = (ground) => {

    setOutfit(ground.id);


    localStorage.setItem('outfit', ground.id);

    setShowAlert({ status: true, type: 'info', message: `${ground.name} is battle ready!` });

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };


  const boardChoice = (choice) => {
    try{

      // console.log(index,"swag");

      console.log(localStorage.getItem("currentCard"),"dwa  ")
      
      if (player01hand[localStorage.getItem("currentCard")].manaCost.toNumber() > player1.mana){
        console.log("ERROR")
        setShowAlert({ status: true, type: 'info', message: `not enough mana` });
      }else{
    
      contract.playMinion(0,localStorage.getItem("currentCard"));
        setShowAlert({ status: true, type: 'info', message: `minion played` }); 
       }

       localStorage.removeItem("currentCard")

  
    }catch (error) {
      setErrorMessage(error.message);

    }

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


  const endTurn3 = async (chouice) => {
  
    try {
      // await contract.playMinion(1,0);
      console.log('xd2');
      await contract.playMinionById(7,1);
      await contract.playMinionById(1,1);
      await contract.playMinionById(8,1);
      await contract.playMinionById(5,1);
      await contract.playMinionById(12,1);
      // await contract.drawCards(0);
      // await contract.drawCards(1);


      setShowAlert({
        status: true,
        type: 'info',
        message: `ended turn FOR THE BOT`,
      });
    } catch (error) {
      

      setErrorMessage(error);
    }


  };

  const cameraRef = useRef();

  function handleMeshClick(meshNum) {
    console.log(`Mesh ${meshNum} clicked!`);
    alert(meshNum);
  }

  function getShowMeshFunction(meshNum) {
    if (meshNum === 12) {
      return showMesh12;
    } else if (meshNum === 11) {
      return showMesh11;
    }
  }
  

  return (


 

<div className={`${styles.flexBetween} ${styles.gameContainer} `} style={{ backgroundColor: "gray" }}>



{showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}
<div className='hiddenHealthBar'>
<PlayerInfo player={player2} playerIcon={player02Icon} mt />
   
</div>
   <div className="cardshidden">
          {[...player02hand].map((player02hand, i) => (
            <HiddenHearthstoneCard card={player02hand} key={i} {...player02hand} />
          ))}
     </div>

{/* 
         <div className="flex items-center flex-row">
       <Card
         card={player2}
        title={player2?.playerName}
         cardRef={player2Ref}
         playerTwo 
    
       />
     
   
        
  <ActionButton
    imgUrl={rsrange}
    handleClick={() => makeAMove()}
    restStyles="ml-6 hover:border-red-600"
 />
  </div> */}
    
    <div className='relative'>

  <Canvas style={{ width: '2000px', height: '800px' }} camera={{ position: [-5, 2, -1.5] }}>
    <ambientLight />
    <pointLight position={[10, 40, 10]} />
    <Model scale={1.6} handleMeshClick={(meshNum) => handleMeshClick(meshNum)} 
    showMesh1={showMesh1} showMesh2={showMesh2}
    showMesh3={showMesh3} showMesh4={showMesh4} 
    showMesh5={showMesh5} showMesh6={showMesh6} 
    showMesh7={showMesh7} showMesh8={showMesh8} 
    showMesh9={showMesh9} showMesh10={showMesh10} 
    showMesh11={showMesh11} showMesh12={showMesh12}
    showMesh13={showMesh13} showMesh14={showMesh14} 
 
     />
    <Controls />
  </Canvas>
  <div className='hiddenHealthBar'>
  <PlayerInfo player={player1} playerIcon={player01Icon} />
  </div>
  </div>

 


    <div class='boardcardsTop'>
<div onClick={() =>boardChoice(1)} className={`${localStorage.getItem("currentCard") === null?"":styles.glassEffect} w-20 h-28`}>
       <div className=''></div>
      {localStorage.getItem("currentCard") === null? <h2 ></h2> : <h2>Place Here</h2>

      }
     </div>
 {[...player01board].map((player01board, i) => (

  
       
       <Board card={player01board} key={i} {...player01board} playerTwo index={i} />
       


     ))}
     <div onClick={() =>boardChoice(2)} className={`${localStorage.getItem("currentCard") === null?"":styles.glassEffect} w-20 h-28`}>
      <div className=''></div>
      {localStorage.getItem("currentCard") === null? <h2 ></h2> : <h2>Place Here</h2>

     }
     </div>
   </div>
      


    {/* <GameInfo /> */}
 
    <div class='boardcards'>
 {[...player02board].map((player02board, i) => (
        <Board card={player02board} key={i} {...player02board} playerTwo bot index={i} />
     ))}

   </div>





     <div class='cards' >
       
           {[...player01hand].map((player01hand, i) => (
                 <HearthstoneCard card={player01hand} key={i} {...player01hand} playerTwo index={i}/>
             ))}
           
       </div>

 </div>
);

};

export default Hearthstone;
