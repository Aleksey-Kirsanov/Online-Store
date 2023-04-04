import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <><h1>Регистрация</h1>
      <Link className='nav-link' to='/enter'>
        Войти
      </Link>
    </>
  );
};

export default Login;
