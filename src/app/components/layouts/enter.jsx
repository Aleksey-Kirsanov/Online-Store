import React from "react";
import { Link } from "react-router-dom";

const Enter = () => {
  return (
    <>
      <h1>Вход</h1>
      <Link className='nav-link' to='/login'>
        Зарегистрироваться
      </Link>
    </>
  );
};

export default Enter;
