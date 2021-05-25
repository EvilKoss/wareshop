import React from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
		<HeaderContainer/>
      	<NavbarContainer/>
    </div>
  );
}

export default App;
