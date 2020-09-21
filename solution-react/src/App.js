import React from 'react';
import './App.css';



// Components
import Hero from './Components/Hero';
import Tile from './Components/Tile';
import TilesList from './Components/TilesList';
import HeroSecond from './Components/HeroSecond';
import Banner from './Components/Banner';
import ImageWide from './Components/ImageWide';
import Footer from './Components/Footer';


import data from './assets/data.json';

function App() {
  return (
    <div className="App">
        <Hero/>
        <TilesList>
            {data.tiles.map(tile => <Tile
            title={tile.title}
            author={tile.author}
            date={tile.date}
            image={tile.image}
            alt={tile.alt}
            type={tile.type}
            href={tile.href}
            />)}
        </TilesList>

        <HeroSecond />

        <Banner />

        <ImageWide />

        <Footer />
    </div>
  );
}

export default App;
