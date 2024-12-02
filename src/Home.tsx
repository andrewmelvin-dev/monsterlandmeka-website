import React, { useState } from 'react';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

interface LightboxContent {
  type: 'video' | 'photo';
  image: string;
  url: string;
  title?: string;
  altTag?: string;
}

const lightboxConfig: LightboxContent[] = [
  { type: 'video', image: 'https://img.youtube.com/vi/ybZggtFLx-k/mqdefault.jpg', url: 'https://www.youtube.com/embed/ybZggtFLx-k', title: 'Tuna Trouble' },
  { type: 'video', image: 'https://img.youtube.com/vi/NUnQ9oPN_rI/mqdefault.jpg', url: 'https://www.youtube.com/embed/NUnQ9oPN_rI', title: 'Shopping' },
  { type: 'video', image: 'https://img.youtube.com/vi/Hkw0G2c3rkA/mqdefault.jpg', url: 'https://www.youtube.com/embed/Hkw0G2c3rkA', title: 'Skateboarding part 2' },
  { type: 'video', image: 'https://img.youtube.com/vi/e2GzlGOX_h8/mqdefault.jpg', url: 'https://www.youtube.com/embed/e2GzlGOX_h8', title: 'Skateboarding' },
  { type: 'video', image: 'https://img.youtube.com/vi/CARpsl0NpuM/mqdefault.jpg', url: 'https://www.youtube.com/embed/CARpsl0NpuM', title: 'August 2020 Updates' },
  { type: 'video', image: 'https://img.youtube.com/vi/PxXtkVonkOA/mqdefault.jpg', url: 'https://www.youtube.com/embed/PxXtkVonkOA', title: 'Preview' },
  { type: 'photo', image: 'photos/thumb/Feb7.png', url: 'photos/Feb7.png', altTag: 'Monterland Meka world map' },
  { type: 'photo', image: 'photos/thumb/Feb6.png', url: 'photos/Feb6.png', altTag: 'Monterland Meka save point valley of peace' },
  { type: 'photo', image: 'photos/thumb/Feb5.png', url: 'photos/Feb5.png', altTag: 'Monterland Meka waterfall valley of peace' },
  { type: 'photo', image: 'photos/thumb/Feb4.png', url: 'photos/Feb4.png', altTag: 'Monterland Meka tunnel valley of peace' },
  { type: 'photo', image: 'photos/thumb/Feb3.png', url: 'photos/Feb3.png', altTag: 'Monterland Meka rock valley of peace' },
  { type: 'photo', image: 'photos/thumb/Feb2.png', url: 'photos/Feb2.png', altTag: 'Monterland Meka store valley of peace' },
  { type: 'photo', image: 'photos/thumb/Feb1.png', url: 'photos/Feb1.png', altTag: 'Monterland Meka store medicine valley of peace' },
  { type: 'photo', image: 'photos/thumb/January8.png', url: 'photos/January8.png', altTag: 'Monterland Meka pygmy armor valley of peace' },
  { type: 'photo', image: 'photos/thumb/January7.png', url: 'photos/January7.png', altTag: 'Monterland Meka skateboarding downhill valley of peace' },
  { type: 'photo', image: 'photos/thumb/January6.png', url: 'photos/January6.png', altTag: 'Monterland Meka skateboarding over bridge valley of peace' },
  { type: 'photo', image: 'photos/thumb/January5.png', url: 'photos/January5.png', altTag: 'Monterland Meka bridge over river valley of peace' },
  { type: 'photo', image: 'photos/thumb/January4.png', url: 'photos/January4.png', altTag: 'Monterland Meka waterfall valley of peace' },
  { type: 'photo', image: 'photos/thumb/January3.png', url: 'photos/January3.png', altTag: 'Monterland Meka swinging on vine valley of peace' },
  { type: 'photo', image: 'photos/thumb/January2.png', url: 'photos/January2.png', altTag: 'Monterland Meka skateboarding valley of peace' },
  { type: 'photo', image: 'photos/thumb/January1.png', url: 'photos/January1.png', altTag: 'Monterland Meka tavern' },
  { type: 'photo', image: 'photos/thumb/November1.png', url: 'photos/November1.png', altTag: 'Monterland Meka skateboarding valley of peace' },
  { type: 'photo', image: 'photos/thumb/October6.png', url: 'photos/October6.png', altTag: 'Monterland Meka treasure valley of peace' },
  { type: 'photo', image: 'photos/thumb/October5.png', url: 'photos/October5.png', altTag: 'Monterland Meka treasure valley of peace' },
  { type: 'photo', image: 'photos/thumb/October4.png', url: 'photos/October4.png', altTag: 'Monterland Meka river valley of peace' },
  { type: 'photo', image: 'photos/thumb/October3.png', url: 'photos/October3.png', altTag: 'Monterland Meka anaconda in river valley of peace' },
  { type: 'photo', image: 'photos/thumb/October2.png', url: 'photos/October2.png', altTag: 'Monterland Meka skateboarding downhill valley of peace' },
  { type: 'photo', image: 'photos/thumb/October1.png', url: 'photos/October1.png', altTag: 'Monterland Meka Wonder Boy skateboarding valley of peace' },
  { type: 'photo', image: 'photos/thumb/DeathMaster1.png', url: 'photos/DeathMaster1.png', altTag: 'Monterland Meka death master boss' },
  { type: 'photo', image: 'photos/thumb/DeathMaster2.png', url: 'photos/DeathMaster2.png', altTag: 'Monterland Meka death master boss' },
  { type: 'photo', image: 'photos/thumb/DeathMaster3.png', url: 'photos/DeathMaster3.png', altTag: 'Monterland Meka death master boss' },
  { type: 'photo', image: 'photos/thumb/DeathMaster4.png', url: 'photos/DeathMaster4.png', altTag: 'Monterland Meka death master boss' },
  { type: 'photo', image: 'photos/thumb/DeathMaster5.png', url: 'photos/DeathMaster5.png', altTag: 'Monterland Meka death master boss' },
  { type: 'photo', image: 'photos/thumb/Bar2.png', url: 'photos/Bar2.png', altTag: 'Monterland Meka tavern / bar / pub' },
  { type: 'photo', image: 'photos/thumb/Bar1.png', url: 'photos/Bar1.png', altTag: 'Monterland Meka tavern / bar / pub' },
  { type: 'photo', image: 'photos/thumb/Start8.png', url: 'photos/Start8.png', altTag: 'Monterland Meka start game' },
  { type: 'photo', image: 'photos/thumb/Start6.png', url: 'photos/Start6.png', altTag: 'Monterland Meka menu' },
  { type: 'photo', image: 'photos/thumb/Start5.png', url: 'photos/Start5.png', altTag: 'Monterland Meka start area' },
  { type: 'photo', image: 'photos/thumb/Start4.png', url: 'photos/Start4.png', altTag: 'Monterland Meka start area' },
  { type: 'photo', image: 'photos/thumb/Start3.png', url: 'photos/Start3.png', altTag: 'Monterland Meka start area home' },
  { type: 'photo', image: 'photos/thumb/Start2.png', url: 'photos/Start2.png', altTag: 'Monterland Meka start area' },
  { type: 'photo', image: 'photos/thumb/Start1.png', url: 'photos/Start1.png', altTag: 'Monterland Meka start area home' },
  { type: 'photo', image: 'photos/thumb/Screenshot2-1.png', url: 'photos/Screenshot2-1.png', altTag: 'Monterland Meka menu' },
  { type: 'photo', image: 'photos/thumb/Screenshot3-1.png', url: 'photos/Screenshot3-1.png', altTag: 'Monterland Meka menu' },
  { type: 'photo', image: 'photos/thumb/Screenshot4-1.png', url: 'photos/Screenshot4-1.png', altTag: 'Monterland Meka baraboro coast' },
  { type: 'photo', image: 'photos/thumb/Screenshot5-1.png', url: 'photos/Screenshot5-1.png', altTag: 'Monterland Meka baraboro coast' },
  { type: 'photo', image: 'photos/thumb/ValleyOfPeace4.png', url: 'photos/ValleyOfPeace4.png', altTag: 'Monterland Meka valley of peace' },
  { type: 'photo', image: 'photos/thumb/ValleyOfPeace.png', url: 'photos/ValleyOfPeace.png', altTag: 'Monterland Meka valley of peace' }
];

const Home: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };
  
  // Display the home page by default
  return (
    <div className="content">

      <h3 className="introduction">Monsterland Meka is a modern re-imagining of the 1980’s SEGA video game “Wonder Boy In Monster Land”.</h3>

      <h2>Latest News</h2>
      <p>
        <b>Friday 15th September 2023:&nbsp;</b>
        <span>Due to Unity licensing changes Monsterland Meka will no longer be developed using Unity Engine. An alternative is now in development using Unreal Engine.</span>
      </p>

      <h2>Video Gallery</h2>
      <div className="videoContent">
      {
        lightboxConfig.map((content, index) => {
          if (content.type === 'video') {
            return (
              <div key={index} className="videoLink" tabIndex={0}>
                <button onClick={() => handleImageClick(index)} style={{ backgroundImage: "url(" + content.image + ")" }} />
              </div>
            );
          }
          return '';
        })
      }
      </div>

      <h2>Photo Gallery</h2>
      <div className="photoContent">
      {
        lightboxConfig.map((content, index) => {
          if (content.type === 'photo') {
            return (
              <div key={index} className="photoLink" tabIndex={0}>
                <button onClick={() => handleImageClick(index)} style={{ backgroundImage: "url(" + content.image + ")" }} />
              </div>
            );
          }
          return '';
        })
      }
      </div>

      {lightboxOpen && (
        <ReactImageVideoLightbox data={lightboxConfig} startIndex={lightboxIndex} showResourceCount={true} onCloseCallback={() => setLightboxOpen(false)} />
      )}

    </div>
  );
}

export default Home;
