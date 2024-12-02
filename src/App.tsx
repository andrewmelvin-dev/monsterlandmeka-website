import React from 'react';
import Header from './Header';
import Main from './Main';
import Links from './Links';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="row">
        <Main />
        <Links />
      </div>
    </div>
  );
}

export default App;
