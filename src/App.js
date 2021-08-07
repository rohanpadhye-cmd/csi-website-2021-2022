import { useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import CouncilComponent from './components/CouncilComponent';
import WorkComponent from './components/WorkComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import AboutPage from './components/AboutPage';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './assets/App.css';
// import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000)
  }, [])

  AOS.init();
  
  return (
    <>
      {
        isLoading === true? ( <Loader /> ) : (
          <div className = "App">
            <NavbarComponent />
            <div className="content">
            {/* <AnimatePresence exitBeforeEnter> */}
            <Switch  location = {location} key={location.key}>
                <Route exact path="/">
                  <HomeComponent />
                </Route>
                <Route path="/home">
                  <HomeComponent />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/council">
                  <CouncilComponent/>
                </Route>
                <Route path="/work">
                  <WorkComponent />
                </Route>
                <Route path="/contact">
                  <ContactComponent />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              {/* </AnimatePresence> */}
            </div>
            <FooterComponent />
          </div >
        )
      }
    </>
  );
}

export default App;
