import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import FormProvider from './context/FormProvider';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import OrderDetails from './pages/OrderDetails';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/admin/manage" component={ Admin } />
      </Switch>
    </main>
  );
}

export default App;
