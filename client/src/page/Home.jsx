import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton, CustomInput, PageHOC } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress, gameData, setShowAlert, setErrorMessage } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
     
        await contract.createGame();

        setShowAlert({
          status: true,
          type: 'info',
          message: ` game is started!`,
        });

        setTimeout(() => navigate('/create-battle'), 8000);
      
    } catch (error) {
      setErrorMessage(error);
    }
  };


  const handleClick2 = async () => {
    try {
      // const playerExists = await contract.isPlayer(walletAddress);

      // if (!playerExists) {
        setShowAlert({
          status: true,
          type: 'info',
          message: `Loading the board!`,
        });

        setTimeout(() => navigate('/hearthstone'), 2000);
      // }
    } catch (error) {
      setErrorMessage(error);
    }
  };


  useEffect(() => {
    const createPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);

      if (playerExists && playerTokenExists) navigate('/create-battle');
    };

    if (contract) createPlayerToken();
  }, [contract]);

  useEffect(() => {
    if (gameData.activeBattle) {
      navigate(`/battle/${gameData.activeBattle.name}`);
    }
  }, [gameData]);

  return (
    walletAddress && (
      <div className="flex flex-col">
        <CustomInput
          label="Name"
          placeHolder="Enter your player name"
          value={playerName}
          handleValueChange={setPlayerName}
        />

        <CustomButton
          title="start"
          handleClick={handleClick}
          restStyles="mt-6"
        />
  
<CustomButton
          title="load"
          handleClick={handleClick2}
          restStyles="mt-6"
        />
      </div>
    )
  );
};

export default PageHOC(
  Home,
  <>
    0xHearhstone,  <br /> 
  </>,
  <>
    Connect your wallet to start playing <br /> this version of hearhstone
  </>,
);
