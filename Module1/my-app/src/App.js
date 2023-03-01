import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from my first React app!
        </p>
        <a
          className="App-link"
          href="https://www.cityu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          City University of Seattle
        </a>
      </header>
    </div>
  );
}

export default App;
