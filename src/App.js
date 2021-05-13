
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar /NavigationBar'
import Fitness from './Fitness/Fitness';
import Home from './Home/Home';
import Calendar from './Calendar/Calendar';


const App = (props) => {

  return (
    <Router> 
      <Switch>
        <Route exact path = '/' component = {NavigationBar}></Route>
        <Route path = '/home' component = {Home}></Route>
        <Route path = '/fitness' component = {Fitness}></Route>
        <Route path = '/calendar' component = {Calendar}></Route>
      </Switch>
    </Router>
  );

}
    
export default App;