import React from 'react';
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards } from '../assets';
import { useGlobalContext } from '../context';
import { blood } from '../assets';



const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

// const img1 = allCards[localStorage.getItem('outfit')-1];
const img2 = generateRandomCardImage();




const Card = ({ card, title, restStyles, cardRef, playerTwo,img1 }) => (

 
  

  <Tilt>
    <div ref={cardRef} className={`${styles.cardContainer} ${restStyles}`}>
      <img src={playerTwo ? img2 : img1} alt="ace_card" className={styles.cardImg} />
     
  

      <div className={`${styles.cardPointContainer} sm:left-[10.2%] left-[10%] top-[63%] bg-white border-solid border-2 border-black	 ${styles.flexCenter}`}>
      {/* <img src={blood} ></img> */}
        <p className={`${styles.cardPoint} text-red-600 drop-shadow	`}>{card.health}</p>
      </div>
      
      {/* <div className={`${styles.cardPointContainer} sm:right-[20.2%] right-[15%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-red-700`}>{card.def}</p>
      </div> */}

      <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
        <p className={styles.cardText}>{title}</p>
      </div>
    </div>
  </Tilt>
);

export default Card;
