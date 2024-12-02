import React from 'react';

import banner1200 from './images/banner.png';
import banner768 from './images/banner-768.png';
import banner300 from './images/banner-300.png';

const Header: React.FC = () => {
  return (
    <a href="/" rel="home">
      <img
        src={banner1200}
        srcSet={`${banner1200} 1200w, ${banner768} 768w, ${banner300} 300w`}
        sizes="(max-width: 709px) 85vw, (max-width: 909px) 81vw, (max-width: 1362px) 88vw, 1200px"
        width="1200"
        height="280"
        alt="Monsterland Meka"
      />
    </a>
  );
}

export default Header;
