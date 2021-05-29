import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Fitness from './Fitness/Fitness'
import Home from './Home/Home'
import FormApp from './CalendarForm/CalendarForm'
import Restaurant from './Restaurant/Restaurant'
import Myaccount from './Myaccount/Myaccount';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/fitness" component={Fitness}></Route>
        <Route exact path="/scheduler" component={FormApp}></Route>
        <Route exact path="/myaccount" component={Myaccount}></Route>
        <Route exact path="/restaurant" component={Restaurant}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
