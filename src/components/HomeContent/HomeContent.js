import React from 'react';
import AboutMission from '../AboutMission/AboutMission';
import MapsInformation from '../MapsInformation/MapsInformation';
import News from '../News/News';

const HomeContent = () => {
  return(
    <main style={{marginTop: '100vh', fontSize: '1.2rem'}}>
    
      <AboutMission/>
      <MapsInformation/>
      <News/>

    </main>)
  ;
};

export default HomeContent;
