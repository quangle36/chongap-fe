import CardProduct from 'components/CardProduct';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from 'utils/request';

interface Estate {
  _id: string;
  title: string;
  totalArea: number;
  type: 'land' | 'house';
  price: string;
  description: string;
  slug_history: any;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

const SellList = () => {
  const [sellLists, setSellLists] = useState<Estate[]>([]);
  const [title, setTitle] = useState('');
  const { districtId } = useParams();

  useEffect(() => {
    console.log(import.meta.env.VITE_API_ENDPOINT);
    const getData = async () => {
      const response = await request.get(`/v1/estates/district/${districtId}`);
      console.log(response);
      setTitle(response.data.title);
      setSellLists(response.data.estates);
    };

    getData();
  }, [districtId]);

  return (
    <div className='flex'>
      <div className='flex flex-col'>
        <div className='bg-main-blue text-white font-semibold lg:w-[700px] p-2'>
          {title}
        </div>
        {sellLists.map((item) => (
          <CardProduct title={item.title} key={item._id} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default SellList;
