import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Emaiil введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль доллжен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль доллжен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль доллжен содержать минимум 8 знаков",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(`email: ${data.email} password: ${data.password} Вход!`);
  };

  const history = useHistory();
  const handleClickEnter = () => {
    history.push("/");
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h3 className='mb-4 text-center'>Вход</h3>
        <div className='col-md-6 offset-md-3 border rounded border-1 border-primary p-4'>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Электронная почта'
              value={data.email}
              onChange={handleChange}
              name='email'
              error={errors.email}
              placeholder="Введите почту"
            />
            <TextField
              label='Пароль'
              type='password'
              value={data.password}
              onChange={handleChange}
              name='password'
              error={errors.password}
              placeholder="********"
            />
            <button
              type='submit'
              disabled={!isValid}
              className='btn btn-primary w-100 mx-auto'
              onClick={handleClickEnter}
            >
              Войти
            </button>
          </form>
        </div>
        <Link className='nav-link text-center mt-3' to='/login'>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default Login;
