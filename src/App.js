import './App.css';
import { Button } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="App mt-3">
        <h1>Hello World!</h1>
        <Button className="mt-2">Click Me!</Button>
      </div>
    </>
  );
}

export default App;
