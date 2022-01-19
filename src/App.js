import logo from './example.png';
import './styles/App.scss';

// import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I AM A WIZARD
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HELLO
        </a>
      </header>
      <div>
        <form className="custom_form">
          <input className="global_input"></input>
          <input className="global_input"></input>
          <input className="global_input"></input>
          <input type="radio" className="global_input radio"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
