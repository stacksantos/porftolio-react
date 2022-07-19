import { React, useState } from 'react';
import './mobileNav.sass';
import LogoSmall from '../../../assets/logo-small.png';
import { GiCompass } from 'react-icons/gi';
import { ImMail } from 'react-icons/im';

const MobileNav = () => {
  const [menuIcon, setMenuIcon] = useState('menuIcon');
  const [slideIn, setSlideIn] = useState('');
  const [toggle, setToggle] = useState('');

  const OpenMenu = () => {
    setMenuIcon('menuIcon rotate');
    setSlideIn('menuSlideIn');
    setToggle(true);
  };
  const CloseMenu = () => {
    setMenuIcon('menuIcon rotate-reverse');
    setSlideIn('menuSlideOut');
    setToggle(false);
  };

  return (
    <>
      <div className='mobileNav'>
        <img src={LogoSmall} alt=' stacksantos logo' id='logoSmall' />
        <GiCompass className={menuIcon} onClick={() => setToggle(!toggle)} />
        <a href='mailto:stacksantos@proton.me'>
          <ImMail className='email rollIn' />
        </a>
        <div className={`mobileMenu ${slideIn}`} id='mobileMenu'>
          <nav className='center mobileMenuContainer fadeIn'>
            <ul className='col start'>
              <li className='mobileLink'>About Me</li>
              <li className='mobileLink'>Projects/Work</li>
              <li className='mobileLink'>The Process</li>
              <li className='mobileLink'>Contact</li>
            </ul>
          </nav>
        </div>
        {toggle ? <OpenMenu /> : <CloseMenu />}
      </div>
    </>
  );
};

export default MobileNav;
