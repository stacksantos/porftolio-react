import './mobileSocials.sass';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const MobileSocials = () => {
  return (
    <>
      <div className='iconContainer col align'>
        <a
          href='https://twitter.com/stacksantos'
          target='__blank'
          className='mobileIcons rollIn'
          id='twitter'
        >
          <BsTwitter />
        </a>
        <a
          href='https://github.com/stacksantos'
          target='__blank'
          className='mobileIcons rollIn'
        >
          <BsGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/christopherleesantos/'
          target='__blank'
          className='mobileIcons rollIn'
        >
          <BsLinkedin />
        </a>
      </div>
    </>
  );
};

export default MobileSocials;
