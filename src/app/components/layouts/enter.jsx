import React from "react";
import { Link } from "react-router-dom";

const Enter = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <h1 className='text-center'>Вход</h1>
      <form className=' border rounded border-1 border-primary p-4 '>
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
            type='password'
            className='form-control'
            id='exampleDropdownFormPassword2'
            placeholder='********'
          />
        </div>
        <button type='submit' className='btn btn-primary container-fluid'>
          Войти
        </button>
      </form>
      <div className=''>
        <Link className='nav-link text-center ' to='/login'>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default Enter;
