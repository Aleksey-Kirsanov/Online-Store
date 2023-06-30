import React from "react";

const Subcategories = ({
  items,
  onSort,
  actiseClass,
  handleClassAllActive,
}) => {
  const itemsNew = items.filter((item) => {
    return item.subcategory === "Новинки";
  });
  const itemsHits = items.filter((item) => {
    return item.subcategory === "Хиты";
  });
  const itemsSale = items.filter((item) => {
    return item.subcategory === "Акции";
  });

  // console.log(actiseClass);
  return (
    <div
      className='btn-group d-flex p-2 bd-highlight'
      role='group'
      aria-label='Basic radio toggle button group'
    >
      <button
        type='radio'
        className={
          "btn btn-outline-primary" +
          (actiseClass === "Новинки" ? " active" : "")
        }
        onClick={() => onSort(itemsNew)}
      >
        Новинки
      </button>
      <button
        type='radio'
        className={
          "btn btn-outline-primary" + (actiseClass === "Акции" ? " active" : "")
        }
        onClick={() => onSort(itemsSale)}
      >
        Акции
      </button>
      <button
        type='radio'
        className={
          "btn btn-outline-primary" + (actiseClass === "Хиты" ? " active" : "")
        }
        onClick={() => onSort(itemsHits)}
      >
        Хиты
      </button>
      <button
        type='radio'
        className={
          "btn btn-outline-success" + (actiseClass === "все" ? " active" : "")
        }
        onClick={() => handleClassAllActive("")}
      >
        Все категории
      </button>
    </div>
  );
};

export default Subcategories;
