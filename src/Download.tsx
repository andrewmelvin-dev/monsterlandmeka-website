import React from 'react';

const Download: React.FC = () => {
  return (
    <div className="content">
      <h3 className="introduction">Monsterland Meka is a modern re-imagining of the 1980’s SEGA video game “Wonder Boy In Monster Land”.</h3>

      <h2>Download Monsterland Meka Alpha Demo</h2>
      <p>The <a href="https://www.mediafire.com/file/uqo0c50yzqge8ue/MonsterlandMekaAlphaDemo.rar/file">Monsterland Meka Alpha Demo</a> is available to download.</p>
      <h3>Instructions:</h3>
      <p>1. Download Monsterland Meka Alpha Demo from the MediaFire link</p>
      <p>2. Extract the .rar file into any location using <a href="https://www.win-rar.com/">WinRAR</a></p>
      <p>3. View the README.txt file inside the archive for further instructions</p>
      <div className="localLink"><a href="https://www.mediafire.com/file/uqo0c50yzqge8ue/MonsterlandMekaAlphaDemo.rar/file" className="download">Download Now (583MB - Windows Only)</a></div>
      <h3>Download Verification Details</h3>
      <table>
        <tr><td className="download">SHA256&nbsp;&nbsp;</td><td>2A457B8E56C0682B27619695B601DB151F6FE99ED9A41693CE6E0B1B8C4D667B</td></tr>
        <tr><td className="download">MD5</td><td>4666B89A29FE849CCF8B8490EF6059AF</td></tr>
      </table>
    </div>
  );
}

export default Download;
