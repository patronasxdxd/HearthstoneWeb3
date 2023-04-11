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


  return (

    <Canvas  style={{ width: '100%', height: '100vh' }} camera={{ position: [-3, 5, -4.5] }}>
  <ambientLight />
  <pointLight position={[10, 10, 10]} />
  <Model  scale={1.6}/>   
   <Controls />

</Canvas>

     
    
  // </div>
);

};

export default Hearthstone;
