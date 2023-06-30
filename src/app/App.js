import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import api from "./api";

import Main from "./layouts/main";
import Login from "./layouts/login";
import ProductCard from "./components/common/productCard";
import Auto from "./components/page/category/auto";
import Candle from "./components/page/category/candle";
import Dif from "./components/page/category/dif";
import ShoppingCart from "./layouts/shoppingCart";
import Favorites from "./layouts/favorites";
import Admin from "./layouts/admin";
import PaymentPage from "./components/common/paymentPage";
import Contacts from "./components/ui/menuItems/contacts";
import Delivery from "./components/ui/menuItems/delivery";
import Info from "./components/ui/menuItems/info";

import NavBar from "./components/ui/navBar";
import Footer from "./components/ui/footer";

function App() {
  const [products, setProducts] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    if (products) {
      const search = searchQuery
        ? products.filter(
            (product) =>
              product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
              -1
          )
        : "";
      setSearchProducts(search);
    }
  }, [searchQuery]);

  // useEffect(() => {
  //   console.log(products ? products : "products");
  //   console.log(searchQuery ? searchQuery : "searchQuery");
  //   console.log(searchProducts ? searchProducts : "searchProducts");
  // }, [products, searchQuery, searchProducts]);

  return (
    <>
      <NavBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Switch>
        {searchProducts && (
          <div>
            <h1 className='text-center'>
              {searchProducts.length
                ? "Искали что то из этого ?"
                : "К сожалению, ничего не нашлось..."}
            </h1>
            <ProductCard
              selectedItem={searchProducts}
              setSubcategorySelect={setSearchProducts}
            />
          </div>
        )}
        <Route path='/' exact component={Main} />
        <Route path='/login/:type?' component={Login} />
        <Route path='/dif' component={Dif} />
        <Route path='/candle' component={Candle} />
        <Route path='/auto' component={Auto} />
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
