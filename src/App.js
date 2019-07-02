import React from 'react';
import './styles.scss';
import HeaderSection from './header-section';
import WelcomeSection from './welcome-section';
// import ReadingSection from './reading-section';
import FooterSection from './footer-section';

function App() {
  return (
    <>
      <HeaderSection />
      <WelcomeSection />
      {/* <ReadingSection /> */}
      <FooterSection />
    </>
  );
}

export default App;
