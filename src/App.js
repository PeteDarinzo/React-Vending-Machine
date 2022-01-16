import './App.css';
import { BrowserRouter, Route } from "react-router-dom"

import Popcorn from './Popcorn';
import Cheese from './Cheese';
import Donut from './Donut'
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/Cheese">
          <Cheese />
        </Route>
        <Route exact path="/Popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/Donut">
          <Donut />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
