import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const handleClickEnter = () => {
    history.push("/enter");
  };

  return (
    <nav className='navbar navbar-dark bg-dark navbar-light bg-light zindex-tooltip'>
      <div className='container-fluid d-flex bd-highlight'>
        <Link className='navbar-brand me-auto p-2 bd-highlight' to='/'>
          Главная
        </Link>
        <div className='p-2 bd-highlight'>
          <button
            className='btn btn-outline-success me-2'
            type='button'
            disabled
          >
            Редактировать
          </button>
          <button
            className='btn btn-sm btn-outline-secondary me-2'
            type='button'
            disabled
          >
            Профиль
          </button>
          <button
            onClick={handleClickEnter}
            className='btn btn-sm btn-outline-secondary me-2'
            type='button'
          >
            Вход/Регистрация
          </button>
        </div>
        <button
          className='navbar-toggler p-2 bd-highlight'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse zindex-tooltip'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <div
                className='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Категории товаров
              </div>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to='/category'>
                    Категория 1
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/category'>
                    Категория 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/delivery'>
                Доставка и оплата
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contacts'>
                Контанты
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/info'>
                О нас
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Поиск по каталогу'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Найти
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
