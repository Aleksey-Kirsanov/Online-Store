import React from "react";
import Basket from "../common/basket";
import Table from "../common/table";

const ProductsTable = ({
  products,
  onSort,
  selectedSort,
  onBasket,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Название товара",
    },
    category: {
      path: "category",
      name: "Категория товара",
    },
    price: {
      path: "price",
      name: "Цена",
      component: (product) => <p>{product.price}</p>,
    },
    basket: {
      path: "basket",
      name: "В корзину",
      component: (product) => (
        <Basket
          status={product.shoppingСart}
          onClick={() => onBasket(product._id)}
        />
      ),
    },
    delete: {
      component: (product) => (
        <button
          onClick={() => onDelete(product._id)}
          className='btn btn-danger'
        >
          Удалить
        </button>
      ),
    },
  };

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={products}
    />
  );
};

export default ProductsTable;
