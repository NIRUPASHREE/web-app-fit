
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar /NavigationBar'
import Fitness from './Fitness/Fitness';
import Home from './Home/Home';
import FormApp from './CalendarForm/CalendarForm';


const App = (props) => {

  return (
    <Router> 
      <Switch>
        <Route exact path = '/' component = {NavigationBar}></Route>
        <Route path = '/home' component = {Home}></Route>
        <Route path = '/fitness' component = {Fitness}></Route>
        <Route path = '/calendar' component = {FormApp}></Route>
      </Switch>
    </Router>
  );

}
    
export default App;