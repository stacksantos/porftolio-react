import { React, useState } from 'react';
import './mobileNav.sass';
import LogoSmall from '../../../assets/logo-small.png';
import { GiCompass } from 'react-icons/gi';
import { ImMail } from 'react-icons/im'

const MobileNav = () => {
  const [menuIcon, setMenuIcon] = useState('menuIcon');
  const [slideIn, setSlideIn] = useState('')
  const [isToggled, setIsToggled] = useState('');

  const OpenMenu = () => {
    setMenuIcon('menuIcon rotate');
    setSlideIn('menuSlideIn')
    setIsToggled(true)
  };
  const CloseMenu = () => {
    setMenuIcon('menuIcon rotate-reverse')
    setSlideIn('menuSlideOut')
    setIsToggled(false)
  }


  return (
    <>
      <div className='mobileNav'>
        <img src={LogoSmall} alt=' stacksantos logo' id='logoSmall' />
        <GiCompass
          className={menuIcon}
          onClick={() => setIsToggled(!isToggled)}
        />
        <a href='mailto:stacksantos@proton.me'>
          <ImMail className='email' />
        </a>
        <div className={slideIn} id='mobileMenu'>
          <nav className='center mobileMenuContainer'>
            <ul className='col start'>
              <li className='mobileLink'>About Me</li>
              <li className='mobileLink'>Projects/Work</li>
              <li className='mobileLink'>The Process</li>
              <li className='mobileLink'>Contact</li>
            </ul>
          </nav>
        </div>
        {isToggled ? <OpenMenu /> : <CloseMenu />}
      </div>
    </>
  );
};

export default MobileNav;
