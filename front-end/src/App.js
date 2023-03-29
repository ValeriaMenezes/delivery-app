import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Switch } from 'react-router-dom';
import sellerOrders from './Pages/sellerOrders';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/seller/orders" component={ sellerOrders } />
      </Switch>
    </div>
  );
}

export default App;
