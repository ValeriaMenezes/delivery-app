import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import RootProvider from './context/RootProvider';
import Login from './pages/Login';

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
        </Switch>
      </RootProvider>
    </main>
  );
}

export default App;
