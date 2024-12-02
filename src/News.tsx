import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  return (
    <div className="content">
      <h3 className="introduction">Monsterland Meka is a modern re-imagining of the 1980’s SEGA video game “Wonder Boy In Monster Land”.</h3>
      <h2>News</h2>

      <h3>Friday 15th September 2023</h3>
      <p>Due to Unity licensing changes Monsterland Meka will no longer be developed using Unity Engine. An alternative is now in development using Unreal Engine.</p>

      <h3>Sunday 30th October 2022</h3>
      <p>A new website, and the alpha demo version is available to download. Visit the <Link to="/download" reloadDocument>download</Link> page for more details.</p>
    </div>
  );
}

export default News;
