import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default class Button extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   }
//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
// }

// export default function Button() {
//   const [buttonText, setButtonText] = useState("Click me, please");
//   return (
//     <button onClick={() => setButtonText("Thanks, been clicked!")}>
//       {buttonText}
//     </button>
//   );
// }

// export default function Button() {
//   const [buttonText, setButtonText] = useState("Click me, please");
//   function handleClick() {
//     return setButtonText("Thanks, been clicked!");
//   }
//   return <button onClick={handleClick}>{buttonText}</button>;
// }


export default App;
