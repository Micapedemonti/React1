import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Martin"></Greeting> */}
      <GreetingF name="Micaela"></GreetingF>
      </header>
    </div>
  );
}

export default App;
