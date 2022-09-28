import { Error404Icon } from 'assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col content-center items-center mt-40'>
      <div className='text-9xl'>404</div>
      <h2>Không tìm thấy trang này</h2>
      <button className='btn btn-primary mt-4' onClick={() => navigate('/')}>
        Trở về trang chủ
      </button>
    </div>
  );
};

export default Error404;
