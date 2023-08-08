import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        
          <Route path="/" exact component={Home} />
         

        <Footer />
      </div>
    </Router>
  );
}

export default App;
