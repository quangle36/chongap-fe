import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { regex, style } from './style';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="flex flex-col w-full h-full  items-center">
      <h1 className="text-3xl mb-4">Đăng ký</h1>
      <form
        onSubmit={handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
        className="w-screen flex flex-col items-center"
      >
        <input
          {...register('username', {
            required: 'Xin hãy nhập tên đăng nhập',
            maxLength: 10,
            pattern: {
              value: regex.username,
              message: 'Tên không hợp lệ',
            },
          })}
          className={`${style.input}  ${
            errors.username ? ' focus:outline-none focus:border-red-600' : ''
          }`}
          placeholder="Tên đăng nhập*"
        />
        <span className={`${style.errorMessage}`}>
          {errors.username?.message}
        </span>
        <input
          {...register('email', {
            required: 'Xin hãy nhập email',
            pattern: {
              value: regex.email,
              message: 'Email không hợp lệ',
            },
          })}
          className={`${style.input}  ${
            errors.email ? ' focus:outline-none focus:border-red-600' : ''
          }`}
          placeholder="Email*"
        />

        <span className={`${style.errorMessage}`}>{errors.email?.message}</span>
        <input
          {...register('phoneNumber', {
            required: 'Xin hãy nhập số điện thoại',
            maxLength: 10,
            pattern: {
              value: regex.phoneNumber,
              message: 'Số điện thoại không hợp lệ',
            },
          })}
          className={`${style.input} ${
            errors.phoneNumber ? ' focus:outline-none focus:border-red-600' : ''
          }`}
          placeholder="Điện thoại*"
        />
        <span className={`${style.errorMessage}`}>
          {errors.phoneNumber?.message}
        </span>
        <input
          {...register('password', {
            required: 'Xin hãy nhập mật khẩu',
            pattern: {
              value: regex.password,
              message: 'Mật khẩu không hợp lệ',
            },
          })}
          className={`${style.input}   ${
            errors.password ? ' focus:outline-none focus:border-red-600' : ''
          }`}
          placeholder="Mật khẩu* (min 8 kí tự, 1 chữ và 1 số)"
          type={passwordShown ? 'text' : 'password'}
        />
        <span className={`${style.errorMessage}`}>
          {errors.password?.message}
        </span>
        <button
          className="btn btn-primary w-80 text-white rounded-xl"
          onClick={handleSubmit(data => {
            alert(JSON.stringify(data));
          })}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
