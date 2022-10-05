import { Landmark } from 'assets/images';
import { AxiosError } from 'axios';
import { style } from 'pages/SignUp/style';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { commonStrings } from 'translation/vi';
import api from 'utils/api';
import { regex } from 'utils/regex';
import request from 'utils/request';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmitCallback = async (data: FieldValues) => {
    try {
      const response = await api.post('/v1/auth/login', data);
      console.log(response);
      if (response) {
        navigate('/');
      }
    } catch (error: any) {
      console.log(error.response.status);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row lg:justify-between w-full h-full  items-center lg:items-start'>
      <img className='h-full lg:w-1/2 hidden lg:inline-block' src={Landmark} />
      <div className='flex flex-col items-center mt-32  lg:w-1/2'>
        <h1 className='text-3xl mb-4'>{commonStrings.signIn}</h1>
        <form
          onSubmit={handleSubmit(handleSubmitCallback)}
          className='w-fit flex flex-col'
        >
          <input
            {...register('email', {
              required: 'Xin hãy nhập tên đăng nhập',
              // maxLength: 10,
              // pattern: {
              //   value: regex.username,
              //   message: 'Tên không hợp lệ',
              // },
            })}
            className={`${style.input}  ${
              errors.username ? ' focus:outline-none focus:border-red-600' : ''
            }`}
            placeholder='Tên đăng nhập*'
          />
          <span className={`${style.errorMessage}`}>
            {errors.username?.message as React.ReactNode}
          </span>
          <input
            {...register('password', {
              required: 'Xin hãy nhập mật khẩu',
              // pattern: {
              //   value: regex.password,
              //   message: 'Mật khẩu không hợp lệ',
              // },
            })}
            className={`${style.input}   ${
              errors.password ? ' focus:outline-none focus:border-red-600' : ''
            }`}
            placeholder='Mật khẩu*'
            type={passwordShown ? 'text' : 'password'}
          />
          <span className={`${style.errorMessage}`}>
            {errors.password?.message as React.ReactNode}
          </span>
          <button
            type='submit'
            className='btn bg-main-blue w-80 text-white rounded-xl mt-4 border-none'
            // onClick={handleSubmit((data) => {
            //   alert(JSON.stringify(data));
            // })}
          >
            {commonStrings.signIn}
          </button>
          <div className='divider my-4'>Hoặc</div>
        </form>
        <button
          type='submit'
          className='btn bg-google-red w-80 text-white rounded-xl border-none'
          // onClick={handleSubmit((data) => {
          //   console.log(data);
          // })}
        >
          <FaGoogle className='inline-block mr-2' />
          {commonStrings.signInWithGoogle}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
