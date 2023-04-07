import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import CustomerOrder from './pages/CustomerOrder';
import './App.css';
// import RootProvider from './context/RootProvider';
// import FormProvider from './context/FormProvider';
import OrderDetails from './pages/OrderDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import telaDeDetalhesTemporaria from './pages/TelaDeDetalhesTemporaria'; // pode remover assim que a tela de detalhes for concluida

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
        <Route exact path="/customer/orders" component={ CustomerOrder } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/seller/orders/:id" component={ OrderDetails } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route exact path="/admin/manage" component={ Admin } />
        <Route exact path="/customer/orders/:id" component={ telaDeDetalhesTemporaria } />
        <Route exact path="/seller/orders/:id" component={ telaDeDetalhesTemporaria } />
      </Switch>
    </main>
  );
}

export default App;
