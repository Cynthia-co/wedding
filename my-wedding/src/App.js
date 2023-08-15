import React from 'react';


import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Attending from './components/Attending';
import History from './pages/History';
// 


function App() {
  return (
    <div className="App">
      <Header/> 
       <Home/>
        <Attending/> 
        <History/>
      <Footer/>
    </div>
  );
}

export default App;
