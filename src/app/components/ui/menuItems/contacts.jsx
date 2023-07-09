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
        <a
          target='_blank'
          href='https://mail.ru/'
          className='btn me-1'
          role='button'
        >
          <i className='bi bi-envelope text-warning'></i>
          <h6>Email</h6>
        </a>
        <a
          target='_blank'
          href='https://www.whatsapp.com/?lang=ru'
          className='btn me-1'
          role='button'
        >
          <i className='bi bi-whatsapp text-success'></i>
          <h6>WhatsApp</h6>
        </a>
        <a
          target='_blank'
          href='https://web.telegram.org/a/'
          className='btn me-1'
          role='a'
        >
          <i className='bi bi-telegram text-primary'></i>
          <h6>Telegram</h6>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
