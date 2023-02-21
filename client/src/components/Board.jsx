import React from 'react';
import Tilt from 'react-parallax-tilt';

// import styles from '../styles';
import { allCards, hscard2,legendCardBack } from '../assets';
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

    // // await contract.attack(0,666,0);
// // await contract.attack(0,666,0);

// await contract.attack(0,1,0);


    const Attacked = async (card) => {
    
        // await contract.attack(3,0,0)
        await contract.attack(localStorage.getItem("battleCard"),index,0)

        localStorage.removeItem('battleCard');
        setShowAlert({ status: true, type: 'info', message: `${card.name} got attacked` });
    
    }
    
      return (

     

        
      
    <div onClick={() => bot?Attacked(card):makeAMove(card)} className={'board'}>
     
      <img src={playerTwo? hscard2[Number(card.id)-1] :legendCardBack} alt="ace_card"  />


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
