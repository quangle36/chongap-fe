import React, { useEffect, useState } from 'react';
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

  const element = () => {
    return (
      <div className='h-2 w-2 rounded-full bg-green-500 opacity-75 mr-4'></div>
    );
  };
  return (
    <div className='flex flex-col w-[300px] items-center mr-4 grow'>
      <div className='bg-main-blue text-white font-semibold lg:w-full p-2 pl-8 flex'>
        {commonStrings.hotEstates}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {data.map((item) => (
          <div key={item._id} className='flex flex-col'>
            <img src={item.photos[0]} />
            <div className='line-clamp-2'>{item.title}</div>

            <div>Diện tích {item.totalArea}m²</div>
            <div> Giá {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotEstates;
