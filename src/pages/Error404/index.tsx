import { Error404Icon } from 'assets/images';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col content-center items-center mt-40'>
      {/* <div className='text-9xl'>404</div>  */}
      <LazyLoadImage className='w-[400px]' src={Error404Icon} />
      <h2 className='mt-4'>Không tìm thấy trang này</h2>
      <button className='btn btn-primary mt-4' onClick={() => navigate('/')}>
        Trở về trang chủ
      </button>
    </div>
  );
};

export default Error404;
