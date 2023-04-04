import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import Enter from "./components/layouts/enter";
import CardProduct from "./components/layouts/cardProduct";
import Category from "./components/layouts/category";
import ShoppingCart from "./components/layouts/shoppingCart";
import Favorites from "./components/layouts/favorites";
import Admin from "./components/layouts/admin";
import PaymentPage from "./components/layouts/paymentPage";
import Contacts from "./components/menuItems/contacts";
import Delivery from "./components/menuItems/delivery";
import Info from "./components/menuItems/info";

import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/enter' component={Enter} />
        <Route path='/cardProduct' component={CardProduct} />
        <Route path='/category' component={Category} />
        <Route path='/shoppingCart' component={ShoppingCart} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/admin' component={Admin} />
        <Route path='/paymentPage' component={PaymentPage} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/info' component={Info} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
