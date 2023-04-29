import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    licence: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
        ...prevState,
        [target.name]: target.value
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
    name: {
      isRequired: {
        message: "Имя пользователя обязательно для заполнения",
      },
      min: {
        message: "Введите имя",
        value: 1,
      },
    },
    licence: {
      isRequired: {
        message:
          "Вы не можите сипоьзовать наш сервис без подтверждения лицензионного соглашения",
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
    console.log({ data });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Ваше имя'
        value={data.name}
        onChange={handleChange}
        name='name'
        error={errors.name}
      />
      <TextField
        label='Электронная почта'
        value={data.email}
        onChange={handleChange}
        name='email'
        error={errors.email}
      />
      <TextField
        label='Пароль'
        type='password'
        value={data.password}
        onChange={handleChange}
        name='password'
        error={errors.password}
      />
      <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name='licence'
        error={errors.licence}
      >
        {" "}
        Подтвердить <a href='#'>лицензионное соглашение</a>
      </CheckBoxField>
      <button
        type='submit'
        disabled={!isValid}
        className='btn btn-primary w-100 mx-auto'
      >
        Войти
      </button>
    </form>
  );
};

export default RegisterForm;
