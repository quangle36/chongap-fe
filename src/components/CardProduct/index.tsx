import React from 'react';
import { FaImages, FaStar } from 'react-icons/fa';

interface Props {
  title: string;
  price: string;
  area: string;
  location: string;
  date: string;
  numberOfImages: number;
  mainImage: string;
  description: string;
}

const CardProduct = (props: Props) => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:p-0 lg:m-8 p-4 lg:w-[694px] lg:h-[200px]'>
      <h3 className='text-sm text-card-title line-clamp-2 font-bold lg:hidden'>
        <FaStar
          className='fill-yellow-400 inline relative pb-1 mr-1'
          size={16}
        />
        <span>{props.title.toUpperCase()}</span>
      </h3>
      <div className='flex'>
        <div className='relative'>
          <img
            className='h-[90px] w-[120px] lg:h-[200px] lg:w-[200px] rounded-md'
            id='image'
            src={props.mainImage}
          ></img>
          <div className='absolute bottom-2 right-4 text-white flex items-center'>
            <FaImages className='fill-white mr-1' />
            <p className='text-sm'>{props.numberOfImages}</p>
          </div>
        </div>
        <div
          id='details'
          className='flex flex-col placeholder-gray-800 pl-8 justify-center lg:justify-start lg:w-[500px] '
        >
          <h3 className='text-sm text-card-title lg:line-clamp-2 font-bold hidden'>
            <FaStar
              className='fill-yellow-400 inline relative pb-1 mr-1'
              size={16}
            />
            <span>{props.title.toUpperCase()}</span>
          </h3>
          <div className='flex lg:mt-4'>
            <div id='price' className='font-semibold'>
              {props.price} tỷ
            </div>
            <div id='area' className='pl-8 font-semibold'>
              {props.area} m²
            </div>
          </div>
          <div id='location'>{props.location}</div>
          <div id='date' className='font-light'>
            {props.date}
          </div>
          <div id='description' className='hidden lg:line-clamp-2'>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
