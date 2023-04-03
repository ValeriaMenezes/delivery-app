import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import './App.css';
import RootProvider from './context/RootProvider';
// import FormProvider from './context/FormProvider';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <main className="App">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <RootProvider>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/seller/orders" component={ sellerOrders } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
        </Switch>
      </RootProvider>
    </main>
  );
}

export default App;
