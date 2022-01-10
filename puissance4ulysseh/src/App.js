import logo from './logo.svg';
import './App.css';
import react from 'react';
import Case from './Case';

class App extends react.Component {
  render() {
    const cells =[];

     
    for (let y=5; y>=0; y--) {
      const row =[] ;
      for (let x = 0; x< 7; x++) {
        row.push(<Case key={x} x={x} y={y} />);
      }
      cells.push(<div key={y} className="row">{row}</div>);
    }
    


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
      {cells}
    </div>
  );
  }
}
export default App;
