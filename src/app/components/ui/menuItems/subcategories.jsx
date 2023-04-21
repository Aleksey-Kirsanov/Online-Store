import React from "react";
import { useHistory } from "react-router-dom";

const Subcategories = () => {
  const history = useHistory();
  const handleClickHits = () => {
    history.push("/hits");
  };
  const handleClickNews = () => {
    history.push("/news");
  };
  const handleClickSales = () => {
    history.push("/sales");
  };
  // const getSubcategoriesClasses = () => {
  //   return "btn btn-outline-primary" + (??? ? " active" : "");
  // };

  return (
    <div
      className='btn-group d-flex p-2 bd-highlight'
      role='group'
      aria-label='Basic radio toggle button group'
    >
      <button
        onClick={handleClickNews}
        type='radio'
        className='btn btn-outline-primary'
      >
        Новинки
      </button>
      <button
        onClick={handleClickSales}
        type='radio'
        className='btn btn-outline-primary'
      >
        Акции
      </button>
      <button
        onClick={handleClickHits}
        type='radio'
        className='btn btn-outline-primary'
      >
        Хиты
      </button>
    </div>
  );
};

export default Subcategories;
