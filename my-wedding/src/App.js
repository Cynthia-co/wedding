import React from 'react';


import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Attending from './components/Attending';
// 


function App() {
  return (
    <div className="App">
      <Header/> 
       <Home/>
        <Attending/> 
      <Footer/>
    </div>
  );
}

export default App;
