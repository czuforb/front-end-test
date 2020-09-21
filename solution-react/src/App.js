import React from 'react';
import './App.css';
import Card from './Components/Card';
import CardList from './Components/CardList';
import ExtraSection from './Components/ExtraSection';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import SectionContainer from './Components/SectionContainer';

function App() {
  return (
    <div className="App">
      <SectionContainer>
        <Hero />
      </SectionContainer>

      <SectionContainer>
        <CardList>
          <Card />
          <Card />
          <Card />
        </CardList>
      </SectionContainer>

      <SectionContainer>
        <Feature />
      </SectionContainer>

      <SectionContainer>
        <ExtraSection />
      </SectionContainer>

      <SectionContainer>
        <Footer />
      </SectionContainer>
    </div>
  );
}

export default App;
