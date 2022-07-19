import { useEffect } from 'react';
import { React, useState } from 'react';
import MainLogo from '../../components/mainLogo/MainLogo';
import './tapToStart.sass';

const TapToStart = () => {
  const [exit, setExit] = useState('blink');

  const HandleClick = () => {
    setExit('flickerOut');
  };

  useEffect(() => {
    setTimeout(() => {
      setExit('flickerOut')
    }, 5000);
  }, [])

  return (
    <div className='center mainTap'>
      <div className='col align' onClick={HandleClick}>
        <MainLogo />
        <h2 id='tapToStart' className={exit}>
          Welcome
        </h2>
      </div>
    </div>
  );
};

export default TapToStart;
