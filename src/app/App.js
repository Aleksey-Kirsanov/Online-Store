import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Enter from "./layouts/enter";
import CardProduct from "./layouts/cardProduct";
import Category from "./components/menuItems/category";
import ShoppingCart from "./layouts/shoppingCart";
import Favorites from "./layouts/favorites";
import Admin from "./layouts/admin";
import PaymentPage from "./layouts/paymentPage";
import Contacts from "./components/menuItems/contacts";
import Delivery from "./components/menuItems/delivery";
import Info from "./components/menuItems/info";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Subcategories from "./components/subcategories";

import Hits from "./components/subcategories/hits";
import News from "./components/subcategories/news";
import Sales from "./components/subcategories/sales";

function App() {
  return (
    <>
      <NavBar />
      <Subcategories />
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
        <Route path='/hits' component={Hits} />
        <Route path='/news' component={News} />
        <Route path='/sales' component={Sales} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
