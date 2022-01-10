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
      
      {cells}
    </div>
  );
  }
}
export default App;
