import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Popcorn from './Popcorn';
import Cheese from './Cheese';
import Donut from './Donut'
import VendingMachine from './VendingMachine';

/**
 * Create BrowserRouter with Routes for each food item
 * '/' route renders a vending machine that presents all choices
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/cheese">
          <Cheese />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/donut">
          <Donut />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
