import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { commonStrings } from 'translation/vi';

const breakingNews = [
  {
    id: 1,
    title: 'Bản đồ hành chính tỉnh Bình Thuận mới nhất năm 2022',
  },
  {
    id: 2,
    title: 'Bản đồ hành chính thành phố Đà Nẵng mới nhất năm 2022',
  },
  {
    id: 3,
    title: 'Bản đồ hành chính thành phố Nha Trang mới nhất năm 2022',
  },
];

const BreakingNews = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const timer = setInterval(() => {
      // const currentTime24hFormat
      setTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className='items-center h-[40px]  mt-3 border-t-[1px] border-b-[1px] hidden lg:flex mb-8'>
      <div className='flex'>
        <div className='flex items-center justify-center bg-main-blue text-white px-1 min-w-[100px] font-medium'>
          {commonStrings.news}
        </div>
        <div className='ml-w-0 h-0 border-t-[20px] border-b-[20px] border-l-[12px] border-solid border-l-main-blue border-b-transparent border-t-transparent '></div>
      </div>

      <Marquee pauseOnHover gradient={false} speed={30}>
        {breakingNews.map((item) => (
          <Link
            className='mr-4 flex items-center hover:text-black'
            key={item.id}
            to='/'
          >
            <FaAngleDoubleRight className='mr-1' color='orange' size={10} />
            {item.title}
          </Link>
        ))}
      </Marquee>
      <div className='bg-main-blue text-white min-w-[100px] flex justify-center h-[40px] items-center font-medium'>
        {time}
      </div>
    </div>
  );
};

export default BreakingNews;
