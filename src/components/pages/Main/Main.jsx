import React from 'react';
import Promo from './Promo/Promo';
import NavBar from './NavBar/NavBar';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

const Main = () => {
  return (
      <main>
        <Promo />
        <NavBar />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
  );
};

export default Main;