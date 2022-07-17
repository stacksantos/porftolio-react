import { React, useState } from 'react'
import MainLogo from '../../components/mainLogo/MainLogo';
import './tapToStart.sass'

const TapToStart = () => {
  const [exit, setExit] = useState('blink')
  
  const HandleClick = () => {
    setExit('flickerOut');
  };

  return (
    <div className='col align' onClick={HandleClick}>
      <MainLogo />
      <h2 id='tapToStart' className={exit}>Tap To Start</h2>
    </div>
    
  )
}

export default TapToStart