import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Links: React.FC = () => {
  return (
    <div className="links">
      <div className="localLinkContent">
        <Router>
          <div className="localLink"><Link to="/" reloadDocument>Home</Link></div>
          <div className="localLink"><Link to="/news" reloadDocument>News</Link></div>
          <div className="localLink"><Link to="/about" reloadDocument>About</Link></div>
          <div className="localLink"><Link to="/download" reloadDocument className="download">Download</Link></div>
        </Router>
      </div>
      <div className="socialLinkContent">
        <div className="socialLink"><a href="https://twitter.com/monsterlandmeka"><FontAwesomeIcon icon={faTwitter} size="2x" className="fa" /></a></div>
        <div className="socialLink"><a href="https://www.youtube.com/channel/UCdECxVDLRDi0AD-hZKTEltA"><FontAwesomeIcon icon={faYoutube} size="2x" className="fa" /></a></div>
      </div>
    </div>
  );
}

export default Links;
