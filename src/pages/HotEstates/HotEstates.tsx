import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { commonStrings } from 'translation/vi';
import request from 'utils/request';

const HotEstates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await request.get('/v1/estates/hot-estates');
      console.log(response.data);
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <div className='flex flex-col items-center mr-4'>
      <div className='bg-main-blue text-white font-semibold lg:w-full p-2 pl-8 flex mb-4'>
        {commonStrings.hotEstates}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {data.map((item) => (
          <Link to='/' key={item._id} className='flex flex-col'>
            <LazyLoadImage className='rounded-md' src={item.photos[0]} />
            <div className='line-clamp-2 mt-2'>{item.title}</div>

            <div>
              <span className='font-semibold'>Diện tích:</span> {item.totalArea}{' '}
              m²
            </div>
            <div>
              <span className='font-semibold'>Giá:</span> {item.price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotEstates;
