import React from "react";

const Contacts = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Контакты</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas,
        dicta incidunt dolorum ratione omnis temporibus facere nihil totam.
        Praesentium error officiis consequatur a, totam cupiditate? Perspiciatis
        nihil reprehenderit optio, atque iure ex omnis delectus dignissimos.
        Doloremque quaerat quae tenetur optio nobis incidunt velit consectetur
        quos sit enim! Earum, laboriosam.
      </p>
      <div className='text-end'>
        <button
          // onClick={handleClickShoppingCart}
          className='btn me-1'
          type='button'
        >
          <i className='bi bi-envelope text-warning'></i>
          <h6>Email</h6>
        </button>
        <button
          // onClick={handleClickShoppingCart}
          className='btn me-1'
          type='button'
        >
          <i className='bi bi-whatsapp text-success'></i>
          <h6>WhatsApp</h6>
        </button>
        <button
          // onClick={handleClickShoppingCart}
          className='btn me-1'
          type='button'
        >
          <i className='bi bi-telegram text-primary'></i>
          <h6>Telegram</h6>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
