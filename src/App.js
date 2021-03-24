import { useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import CouncilComponent from './components/CouncilComponent';
import WorkComponent from './components/WorkComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import Loader from './components/Loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './assets/App.css';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000)
  }, [])

  return (
    <>
      {
        isLoading === true? ( <Loader /> ) : (
          <BrowserRouter>  
            <div className = "App">
              <NavbarComponent />
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <HomeComponent />
                  </Route>
                  <Route path="/home">
                    <HomeComponent />
                  </Route>
                  <Route path="/about">
                    <AboutComponent />
                  </Route>
                  <Route path="/council">
                    <CouncilComponent />
                  </Route>
                  <Route path="/work">
                    <WorkComponent />
                  </Route>
                  <Route path="/contact">
                    <ContactComponent />
                  </Route>
                </Switch>
              </div>
              <hr className="mx-4 mt-5" />
              <FooterComponent />
            </div >
          </BrowserRouter >
        )
      }
    </>
  );
}

export default App;
