import { React, useState } from 'react';
import Logo from '../../assets/icon.png';

const MainLogo = () => {
  const [exit, setExit] = useState('flickerIn');

  const HandleClick = () => {
    setExit('logoExit');
  };

  return (
    <img
      src={Logo}
      alt='stackSantos main logo'
      id='logoNoLink'
      className={exit}
      onClick={HandleClick}
    />
  );
};

export default MainLogo;
