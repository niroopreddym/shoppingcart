import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
