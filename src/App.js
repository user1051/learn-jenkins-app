import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://jenkins.io"
          rel="noopener noreferrer"
        >
          Jenkins
        </a>
      </header>
      <p>
          Application version: 1.6
      </p>
    </div>
  );
}

export default App;
