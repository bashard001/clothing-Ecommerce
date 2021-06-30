
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"



const HatsPage = () => {
  return (
    <div>
      <h1>
        hats page
      </h1>
    </div>)
}

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
