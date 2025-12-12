import React, { useState } from 'react';
import ig from './image/eden-elegance-high-resolution-logo-transparent.png';
import './Home.css';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import godimg from './image/god_of_war.png'
import gtaimg from './image/GTA-6.png'
import wwmimg from './image/Where-Winds-Meet.png'

const games = [
  {
    id: 1,
    title: 'GTA-6',
    img: gtaimg,
    desc: 'set in the modern-day, Vice City-inspired state of Leonida, following criminal couple Lucia & Jason as they navigate crime'
  },
  {
    id: 2,
    title: 'Where Wind Meet',
    img: wwmimg,
    desc: 'a popular new free-to-play Wuxia (Chinese martial arts fantasy) open-world action RPG where players explore a vast, beautiful world set in 10th-century China, engaging in fluid combat with swords, mystic arts, and mounts, while uncovering mysteries and forging their own legend in a fractured world with deep RPG elements'
  },
  {
    id: 3,
    title: 'God Of War',
    img: godimg,
    desc: 'a Norse mythology-based action-adventure game, a sequel to God of War (2018), following Kratos and his son Atreus as they journey across the Nine Realms to find answers and face the prophesied end of the world, Ragnarök, battling Norse gods and monsters with enhanced combat and new abilities'
  }
];

const Home = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: '-1', pointerEvents: 'none' }}>
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
          {/* <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={5}
            cPolarAngle={90}
            cameraZoom={1}
             color1="#5606ff"
  color2="#56e5fe"
  color3="#005700"
            destination="onCanvas"
            embedMode="off"
            envPreset="Dawn"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1.4}
            positionX={0}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={39}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={0.2}
            uFrequency={0}
            uSpeed={1}
            uStrength={3.1}
            uTime={0}
            wireframe={false}
          /> */}
          <ShaderGradient
  animate="on"
  axesHelper="on"
  brightness={1.1}
  cAzimuthAngle={180}
  cDistance={5.11}
  cPolarAngle={115}
  cameraZoom={1}
  color1="#5606ff"
  color2="#56e5fe"
  color3="#005700"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={0.8}
  positionX={-0.5}
  positionY={0.1}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={0}
  rotationY={0}
  rotationZ={235}
  shader="defaults"
  type="waterPlane"
  uAmplitude={0}
  uDensity={1.5}
  uFrequency={5.5}
  uSpeed={0.3}
  uStrength={2}
  uTime={0.2}
  wireframe={false}
/>
        </ShaderGradientCanvas>
      </div>


      <header>
        <nav className="navbar ">
          <div className="logo navbar-brand"><img src={ig} alt="LeadGen" width="150" height="50" /></div>
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
          </ul>
        </nav>
      </header>
<div>
  <h1 style={{textAlign:'center'}}>Games</h1>
</div>
<div className="G-grid">
        {games.map(g => (
          <div 
            key={g.id} 
            onClick={() => setSelected(g)}
            className="G-Card"
          >
            <img src={g.img} alt='img1' className="game-image" />
            <h2 className="game-title">{g.title}</h2>
          </div>
        ))}
      </div>

      {selected && (
        <div className="container-modal" onClick={() => setSelected(null)}>
          <div className="modal-items">
            <h2 className="modal-title">{selected.title}</h2>
            <p className="modal-dis">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home
