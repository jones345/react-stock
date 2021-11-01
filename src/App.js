
import './App.css';
import List from './List'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add from "./Add";


function App() {

  return (
 <Router>
 <Switch>
 <Route path="/" exact component={List} />
  <Route path="/add" exact component={Add} />
 </Switch>
 </Router> 

  );
}

export default App;
