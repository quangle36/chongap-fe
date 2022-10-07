import { style } from './style';
import { Bitexco } from 'assets/images';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { commonStrings } from 'translation/vi';
import { regex } from 'utils/regex';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row lg:justify-between w-full h-full  items-center lg:items-start'>
      <img className='h-full lg:w-1/2 hidden lg:inline-block' src={Bitexco} />
      <div className='flex flex-col items-center mt-32  lg:w-1/2'>
        <h1 className='text-3xl mb-4'>{commonStrings.signUp}</h1>
        <form
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
          className='flex flex-col w-fit'
        >
          <input
            {...register('username', {
              required: 'Xin hãy nhập họ tên',
              maxLength: 30,
              pattern: {
                value: regex.username,
                message: 'Tên không hợp lệ',
              },
            })}
            className={`${style.input}  ${
              errors.username ? 'focus:border-red-600 focus:outline-none ' : ''
            }`}
            placeholder='Tên hiển thị*'
          />
          <span className={`${style.errorMessage}`}>
            {errors.username?.message as React.ReactNode}
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
            placeholder='Email*'
          />

          <span className={`${style.errorMessage}`}>
            {errors.email?.message as React.ReactNode}
          </span>
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
              errors.phoneNumber
                ? ' focus:outline-none focus:border-red-600'
                : ''
            }`}
            placeholder='Điện thoại*'
          />
          <span className={`${style.errorMessage}`}>
            {errors.phoneNumber?.message as React.ReactNode}
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
            placeholder='Mật khẩu* (min 8 kí tự, 1 chữ và 1 số)'
            type={passwordShown ? 'text' : 'password'}
          />
          <span className={`${style.errorMessage}`}>
            {errors.password?.message as React.ReactNode}
          </span>
          <button
            className='mt-4 text-white border-none btn bg-main-blue w-80 rounded-xl'
            onClick={handleSubmit((data) => {
              alert(JSON.stringify(data));
            })}
          >
            {commonStrings.signUp}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
