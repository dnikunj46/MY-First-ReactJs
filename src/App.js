import logo from './logo.svg';
import './App.css';
import Header from './cpmponent/Header';
import Sidebar from './cpmponent/Sidebar';

function App() {
  return (
    <div className="App">
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
          Learn React From Felix Its.
        </a>
      </header>
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
