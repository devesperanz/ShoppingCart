import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyCart from './components/MyCart';
import Content from './components/Content';
import View from './components/View';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Content} />
          <Route path='/MyCart' component={MyCart} />
          <Route path='/view/:id' component={View} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
