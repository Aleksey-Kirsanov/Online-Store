import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <h1 className='text-center'>Регистрация</h1>
      <form className=' border rounded border-1 border-primary p-4 '>
        <div className='mb-3'>
          <label className='form-label'>Имя</label>
          <input
            type='phone'
            className='form-control'
            id='exampleDropdownPhone2'
            placeholder='Введите имя'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleDropdownFormEmail2'
            placeholder='Введите почту'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Пароль</label>
          <input
            type='text'
            className='form-control'
            id='exampleDropdownFormPassword2'
            placeholder='Введите пароль'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Телефон</label>
          <input
            type='phone'
            className='form-control'
            id='exampleDropdownPhone2'
            placeholder='Введите номер телефона'
          />
        </div>
        <button type='submit' className='btn btn-primary container-fluid'>
          Зарегистрироваться
        </button>
      </form>
      <div className=''>
        <Link className='nav-link text-center' to='/enter'>
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Login;
