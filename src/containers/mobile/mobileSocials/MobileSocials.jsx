import React from 'react';
import './mobileSocials.sass';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const MobileSocials = () => {
  return (
    <>
      <div className='iconContainer col align'>
        <a
          href='https://twitter.com/stacksantos'
          target='__blank'
          className='mobileIcons'
        >
          <BsTwitter />
        </a>
        <a href='https://github.com/stacksantos'>
          <BsGithub className='mobileIcons' />
        </a>
        <a href='https://www.linkedin.com/in/christopherleesantos/'>
          <BsLinkedin className='mobileIcons' />
        </a>
      </div>
    </>
  );
};

export default MobileSocials;
