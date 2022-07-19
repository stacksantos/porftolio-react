import React from 'react';
import MobileNav from '../mobileNav/MobileNav';
import MobileSocials from '../mobileSocials/MobileSocials';
import './mobileContent.sass';
import ProfilePic from '../../../assets/profile-pic.webp';

const MobileContent = () => {
  return (
    <>
      <MobileNav />
      <MobileSocials />
      <div className='mobileContainer col align'>
        {/* start hero section */}

        <div className='heroSection center col align'>
          <img
            src={ProfilePic}
            alt='stacksantos profile pic'
            className='profilePic'
          />
          <div className='helloContainer col align'>
            <h2 id='helloThere'>Hello There</h2>
            <p id='myNameIs'>
              My name is <strong className='strong'>Lee</strong>,<br />
              and I'm a <strong className='strong'>Software Engineer</strong>
              <br />
              based in <strong className='strong'>Rhode Island</strong>.
            </p>
            <button id='getInTouch'>Get In Touch</button>
            <p id='scrollDown' className='blink'>
              Scroll Down
            </p>
          </div>
        </div>

        {/* start about section */}

        <div className='aboutSection center'>
          <div className='aboutContainer col align'>
            TALK ABOUT THE BENEFITS AND SHIT HERE
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContent;
