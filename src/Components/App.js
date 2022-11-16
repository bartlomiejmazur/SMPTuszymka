import React, {useState, useLayoutEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import '../style/App.css';
// import Home from './Home';
import Loader from './Loader';

import Navigation from './Navigation';
import Page from './Page';






const App = () => {

const [loading, setLoading] = useState(false);
  
  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    
  
  },[])

  
  return ( 
    <>
    {loading ? <Loader/> :
    
    <Router>
    <div className="app">
      <nav>
      <Navigation/>
    </nav>
    <main>
    <Page/>
    </main>
    </div>
    </Router>
    }
    </>
    
    );
}
 
export default App;
