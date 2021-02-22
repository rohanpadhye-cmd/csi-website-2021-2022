import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import CouncilComponent from './components/CouncilComponent';
import WorkComponent from './components/WorkComponent';
import ContactComponent from './components/ContactComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import './assets/App.css';

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <NavbarComponent />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route exact path="/home">
              <HomeComponent />
            </Route>
            <Route exact path="/about">
              <AboutComponent />
            </Route>
            <Route exact path="/council">
              <CouncilComponent />
            </Route>
            <Route exact path="/work">
              <WorkComponent />
            </Route>
            <Route exact path="/contact">
              <ContactComponent />
            </Route>
          </Switch>
        </div>
        <hr className="mx-4 mt-5" />
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
