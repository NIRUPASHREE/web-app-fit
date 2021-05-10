
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar /NavigationBar'
import Fitness from './Fitness/Fitness';

const App = (props) => {

  return (
    <Router> 
      <Switch>
        <Route exact path = '/' component = {NavigationBar}></Route>
        <Route path = '/fitness' component = {Fitness}></Route>
      </Switch>
    </Router>
  );

}
    
export default App;