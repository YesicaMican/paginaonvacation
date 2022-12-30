import logo from './logo.svg';
import './App.css';
import fondo from './ADZ Tone 2022-03.jpg'
import BR1 from './assets/img/BR1.jpg'

function App() {
  return (
    
    <div className="App">
      
      <img src={fondo} className="img-fluid" alt="Fondo"></img>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
