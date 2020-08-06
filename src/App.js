import React, { useState } from 'react';
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'
import './App.scss';

const App = () => {
  const [lang, setLang] = useState('eng')
  return (
    <div className="App">
      <Header
        lang={lang}
        setLang={setLang}
      />
      <About
        lang={lang}
      />
      <Skills
        lang={lang}
      />
      <Portfolio
        lang={lang}
      />
      <Contacts
        lang={lang}
      />
    </div>
  );
}

export default App;
