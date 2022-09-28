import React from 'react';

const LiveSupport = () => {
  const element = () => {
    return (
      <div className='h-2 w-2 rounded-full bg-green-500 opacity-75 mr-4'></div>
    );
  };
  return (
    <div className='flex flex-col w-[300px] items-center'>
      <div className='bg-main-blue text-white font-semibold lg:w-full p-2 flex justify-center'>
        Hỗ Trợ Trực Tuyến
      </div>
      <div>
        <div className='flex items-center'>
          {element()}

          <div className='flex flex-col '>
            <h4>Mr. Lê Minh Quang</h4>
            <h5>0123456789</h5>
          </div>
        </div>

        <div className='flex items-center'>
          {element()}
          <div className='flex flex-col '>
            <h4>Mr. Nguyễn Thanh Hải</h4>
            <h5>0123456789</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
