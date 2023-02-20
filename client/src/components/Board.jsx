import React from 'react';
import Tilt from 'react-parallax-tilt';

// import styles from '../styles';
import { allCards, hscard2,legendCardBack } from '../assets';
import { hscards } from '../assets';
import { useGlobalContext } from '../context';
import '../Board.css';


/* global BigInt */



const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

// const img1 = allCards[localStorage.getItem('outfit')-1];
const img2 = generateRandomCardImage();




const Board = ({ card, title, restStyles, cardRef, playerTwo,img1 }) => {
    
      return (
      
    <div className={'board'}>
      
    
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
