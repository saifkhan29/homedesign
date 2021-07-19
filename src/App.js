import './App.css';
import Navbar from './homePage/Navbar';
import Home from './homePage/Home';
import About from './homePage/About';
import Section3 from './homePage/Section3';
import Services from './homePage/Services';
import Footer from './homePage/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Section3/>
      <Services/>
      <Footer/>
      
    </div>
  );
}

export default App;
