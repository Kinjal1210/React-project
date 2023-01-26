import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hi! My Name is Kunjal</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is My First react project</p>
        <ul>
          <li>Name</li>
          <li>Number</li>
          <li>Email</li>
        </ul>
        <p>
         React is so cool!

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
