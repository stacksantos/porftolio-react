import React from 'react';
import MobileNav from '../mobileNav/MobileNav';
import MobileSocials from '../mobileSocials/MobileSocials';
import './mobileContent.sass';
import ProfilePic from '../../../assets/profile-pic.webp';
import { GetInTouch } from '../../../components';
import { FaCode } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { GiBrassEye } from 'react-icons/gi'

const MobileContent = () => {

  return (
    <>
      <MobileNav />
      <MobileSocials />
      <div className='mobileContainer col align' id='mobileContainer'>
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
              My name is Lee <br/> and I'm a Rhode Island based Software Engineer.
            </p>
            {/* <button id='getInTouch'>Get In Touch</button> */}
            <p id='scrollDown' className='blink'>
              Scroll Down
            </p>
          </div>
        </div>

        {/* start about section */}

        <div className='aboutSection center'>
          <div className='aboutContainer col align'>
            <h3>A little about me:</h3>
            <p>
              I used to work on cars & shoot portraits for a living. <br />
              <br />
              Over the years (and after a few injuries) I decided it was time to
              pursue a different career.
              <br />
              <br />
              Developing lets me continue to tinker and create. I get to write
              code every day, and I've never been happier!
              <br />
              <br />
              Speaking of which, I'd love to hear what website projects you have
              in mind.
            </p>
            <a href='mailto:stacksantos@proton.me'>
              <GetInTouch />
            </a>
          </div>
        </div>

        {/* start benefits section */}

        <div className='benefitsSection center'>
          <div className='benefitsContainer col align'>
            <h3>The benefits of websites I build</h3>
            <section className='flex wrap even justify'>
              <div className='col align benefitsItem'>
                <FaCode className='benefitsIcon' />
                <h4 className='benefitsTitle'>Always Responsive Code</h4>
                <p>
                  Whether it's a phone, tablet, or PC, your website will adapt
                  to any screen size.
                </p>
              </div>
              <div className='col align benefitsItem'>
                <DiVisualstudio className='benefitsIcon' />
                <h4 className='benefitsTitle'>
                  Modern Design
                </h4>
                <p>
                  BEAUTIFUL WEBSITE STUFF
                </p>
              </div>
              <div className='col align benefitsItem'>
                <GiBrassEye className='benefitsIcon' />
                <h4 className="benefitsTitle">
                  More traffic
                </h4>
                <p>
                  WE'RE WATCHING YOU
                </p>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContent;
