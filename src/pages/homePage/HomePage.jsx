import { useEffect } from 'react';
import { React, useState } from 'react';
import { TapToStart } from '../../containers';
import { MobileContent } from '../../containers/mobile';
import './homePage.sass';

const HomePage = () => {
  const [start, setStart] = useState(<TapToStart />);

  const HandleStart = () => {
    setTimeout(() => {
     setStart(<MobileContent />); 
    }, 700);
  };
  useEffect(() => {
    setTimeout(() => {
     setStart(<MobileContent />) 
    }, 6500);
  }, [])

  return (
    <div className='mainContainer center' onClick={HandleStart}>
      {start}
    </div>
  );
};

export default HomePage;
