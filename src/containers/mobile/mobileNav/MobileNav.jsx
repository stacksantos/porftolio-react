import { React, useState } from 'react';
import './mobileNav.sass';
import LogoSmall from '../../../assets/logo-small.png';
import { GiCompass } from 'react-icons/gi';

const MobileNav = () => {
  const [menuIcon, setMenuIcon] = useState('menuIcon');
  const [isToggled, setIsToggled] = useState(false);

  const OpenMenu = () => {
    setMenuIcon('menuIcon rotate');
  };
  const CloseMenu = () => {
    setMenuIcon('menuIcon rotate-reverse')
  }
  const InitialMenu = () => {
    setMenuIcon('menuIcon');
  };

  // const MobileLinks = () => {
  //   <>
  //     <nav>
  //       <ul>
  //         <li className='mobileLink'></li>
  //         <li className='mobileLink'></li>
  //         <li className='mobileLInk'></li>
  //       </ul>
  //     </nav>
  //   </>
  // }





  return (
    <>
      <div className='mobileNav row'>
        <img src={LogoSmall} alt=' stacksantos logo' id='logoSmall' />
        <GiCompass
          className={menuIcon}
          onClick={() => setIsToggled(!isToggled)}
        />
        ;{isToggled && <InitialMenu />}
        {isToggled ? <OpenMenu /> : <CloseMenu />}


      </div>
    </>
  );
};

export default MobileNav;
