import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = ({ setSearchQuery, searchQuery }) => {
  const history = useHistory();
  const isLogin = false;
  const isAdmin = false;

  const clearSearch = () => {
    setSearchQuery("");
  };
  const handleClickLogin = () => {
    clearSearch();
    history.push("/login");
  };
  const handleClickAdmin = () => {
    clearSearch();
    history.push("/admin");
  };
  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <nav className='navbar navbar-expand-xxl navbar-dark bg-dark zindex-tooltip'>
      <div className='container-fluid d-flex bd-highlight'>
        <Link
          className='navbar-brand me-auto p-2 bd-highlight'
          to='/'
          onClick={clearSearch}
        >
          Главная
        </Link>
        <div className='p-2 bd-highlight'>
          {isAdmin && (
            <button
              className='btn btn-outline-success m-2'
              type='button'
              onClick={handleClickAdmin}
            >
              Редактировать
            </button>
          )}
          {isLogin ? (
            <button
              className='btn btn-sm btn-outline-secondary m-2'
              type='button'
              disabled
            >
              User (выход)
            </button>
          ) : (
            <button
              onClick={handleClickLogin}
              className='btn btn-sm btn-outline-secondary m-2'
              type='button'
            >
              Вход/Регистрация
            </button>
          )}
        </div>
        <button
          className='navbar-toggler p-2 bd-highlight '
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
          className='navbar-collapse zindex-tooltip collapse'
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
                  <Link className='dropdown-item' to='/candle'           onClick={clearSearch}>
                    Ароматические свечи
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/dif'           onClick={clearSearch}>
                    Диффузоры
                  </Link>
                  <Link className='dropdown-item' to='/auto'           onClick={clearSearch}>
                    Автомобильные диффузоры
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/delivery'           onClick={clearSearch}>
                Доставка и оплата
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contacts'           onClick={clearSearch}>
                Контанты
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/info'           onClick={clearSearch}>
                О нас
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              name='searchQuery'
              type='text'
              placeholder='Поиск по каталогу'
              aria-label='Search'
              onChange={handleSearchQuery}
              value={searchQuery}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
