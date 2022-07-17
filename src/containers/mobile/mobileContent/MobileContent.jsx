import React from 'react';
import MobileNav from '../mobileNav/MobileNav';
import MobileSocials from '../mobileSocials/MobileSocials';
import './mobileContent.sass';
import ProfilePic from '../../../assets/profile-pic.webp';

const MobileContent = () => {
  return (
    <>
      <div className='mobileContainer col align selfStart'>
        <MobileNav />
        <MobileSocials />
        <div className='heroSection col align'>
          <img
            src={ProfilePic}
            alt='stacksantos profile pic'
            className='profilePic'
          />
          <h2 id='helloThere'>Hello There</h2>
          <p id='myNameIs'>
            {' '}
            My name is <strong className='strong'>Lee</strong>,<br />
            and I'm a <strong className='strong'>Software Engineer</strong>
            <br />
            based in <strong className='strong'>Rhode Island</strong>.
          </p>
          <a id='getInTouch' href='mailto:stacksantos@proton.me'>
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileContent;
