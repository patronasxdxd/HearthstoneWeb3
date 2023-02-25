import React from 'react';
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards } from '../assets';
import { useGlobalContext } from '../context';
import { blood } from '../assets';
import '../index.css';




const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

// const img1 = allCards[localStorage.getItem('outfit')-1];
const img2 = generateRandomCardImage();








const Card = ({ card, title, restStyles, cardRef, playerTwo,img1 }) => {


   const { setBattleGround, setShowAlert ,contract} = useGlobalContext();
   const Attacked = async (card) => {
  

    console.log("attacked");
  
    await contract.attack(localStorage.getItem("battleCard"),666,0,0)
  
    localStorage.removeItem('battleCard');
    setShowAlert({ status: true, type: 'info', message: `${card.name} got attacked` });
  
  }



  return (
 
  

  <Tilt>
    <div onClick={() => playerTwo?Attacked(card):""} ref={cardRef} className={`${styles.cardContainer} ${restStyles}`}>
      <img src={playerTwo ? img2 : img1} alt="ace_card" className={styles.cardImg} />
     
  
      <div className={`${styles.cardPointContainer} sm:left-[10.2%] left-[10%] top-[63%] 	 ${styles.flexCenter}`}>
      <img className= "bloodImage" src={blood} ></img>
        <p className={`bloodtext text-white	`}>{card.health}</p>
      </div>
      
      {/* <div className={`${styles.cardPointContainer} sm:right-[20.2%] right-[15%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-red-700`}>{card.def}</p>
      </div> */}

      <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
        <p className={styles.cardText}>{title}</p>
      </div>
    </div>
  </Tilt>
  )
    };

export default Card;
