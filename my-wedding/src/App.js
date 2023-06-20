import logo from './logo.png';
import './App.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Attending from './components/Attending';
// 


function App() {
  return (
    <div className="App">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
       <Home/>
        <Attending/> 
      <Footer/>
    </div>
  );
}

export default App;
