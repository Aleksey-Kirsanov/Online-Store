import React from "react";
import Bookmark from "../common/bookmark";
import Table from "../common/table";

const ProductsTable = ({
  products,
  onSort,
  selectedSort,
  onBookMark,
  onDelete,
  increase,
  decrease,
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
      component: (product) => {
        if (product.subcategory === "sales") {
          return <p>{product.price * (85 / 100)}</p>;
        } else {
          return <p>{product.price}</p>;
        }
      },
    },
    quantity: {
      path: "quantity",
      name: "Количество",
      component: (product) => (
        <div className='input-group '>
          <button
            type='button'
            className='btn btn-outline-secondary minus'
            onClick={() => decrease(product._id)}
            disabled={product.quantity !== 1 ? false : true}
          >
            -
          </button>
          <input
            className='form-control input'
            type='number'
            value={product.quantity}
            disabled
          />

          <button
            type='button'
            className='btn btn-outline-secondary plus'
            onClick={() => increase(product._id)}
          >
            +
          </button>
        </div>
      ),
    },
    cost: {
      path: "cost",
      name: "Стоимость",
      component: (product) => {
        if (product.subcategory === "sales") {
          return <p>{product.totalPrice * (85 / 100)}</p>;
        } else {
          return <p>{product.totalPrice}</p>;
        }
      },
    },
    bookmark: {
      path: "bookmark",
      name: "Отложить",
      component: (product) => (
        <Bookmark
          status={product.bookmark}
          onClick={() => onBookMark(product._id)}
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
