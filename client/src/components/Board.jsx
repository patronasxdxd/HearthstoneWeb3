import React from 'react';
import Tilt from 'react-parallax-tilt';

// import styles from '../styles';
import { allCards, hscard2,legendCardBack,sleeping } from '../assets';
import { hscards } from '../assets';
import { useGlobalContext } from '../context';
import '../Board.css';
import styles from '../styles';


/* global BigInt */



const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

// const img1 = allCards[localStorage.getItem('outfit')-1];
const img2 = generateRandomCardImage();




const Board = ({ card, title, restStyles, cardRef, playerTwo,img1,index ,bot}) => {


    const { setBattleGround, setShowAlert ,contract} = useGlobalContext();

    const makeAMove = async (card) => {
     

    
        localStorage.setItem('battleCard',index);

     
      
        setShowAlert({ status: true, type: 'info', message: `${card.name} selected for battle` });
    
    }

   


    const Attacked = async (card) => {

        console.log("attacked");
      

        await contract.attack(localStorage.getItem("battleCard"),index,0,0)

        localStorage.removeItem('battleCard');
        setShowAlert({ status: true, type: 'info', message: `${card.name} got attacked` });
    
    }
    
      return (

     

        
      
    <div onClick={() => bot?Attacked(card):makeAMove(card)} className={'board'}>
  
    

      <img src={playerTwo? hscard2[Number(card.id)-1] :legendCardBack} alt="ace_card"  />
      <h2 className='text-xs'>HP:{Number(card.health)}  ATT:{Number(card.attack)} </h2>
      <img className='w-6'  src=  {card.asleep.toString() === "true"  ? sleeping: ""}  />
     


      {/* TODO Add these to the cards */}

      {/* <div className={``}>
        <p className={` text-yellow-400`}>{playerTwo? Number(card.attack) : ""}</p>
      </div>

      <div className={``}>
        <p className={` text-yellow-400`}>{playerTwo? Number(card.health) : ""}</p>
      </div> */}
      
   

      <div className={` `}>
        <p >{title}</p>
      </div>
      
    
    </div>
    
      

);
      }

export default Board;
