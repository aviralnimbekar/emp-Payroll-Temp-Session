
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './component/HomeComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeComponent />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
