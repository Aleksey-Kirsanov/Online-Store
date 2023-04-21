import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Enter from "./layouts/enter";
import ProductCard from "./components/common/productCard";
import Category from "./components/page/category/category";
import ShoppingCart from "./layouts/shoppingCart";
import Favorites from "./layouts/favorites";
import Admin from "./layouts/admin";
import PaymentPage from "./components/common/paymentPage";
import Contacts from "./components/ui/menuItems/contacts";
import Delivery from "./components/ui/menuItems/delivery";
import Info from "./components/ui/menuItems/info";

import NavBar from "./components/ui/navBar";
import Footer from "./components/ui/footer";
import Subcategories from "./components/ui/menuItems/subcategories";

import Hits from "./components/page/subcategories/hits";
import News from "./components/page/subcategories/news";
import Sales from "./components/page/subcategories/sales";

function App() {
  return (
    <>
      <NavBar />
      <Subcategories />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/enter' component={Enter} />
        <Route path='/productCard' component={ProductCard} />
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
