import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from 'utils/request';

const SellList = () => {
  const [sellLists, setSellLists] = useState([]);
  const { districtId } = useParams();

  useEffect(() => {
    console.log(import.meta.env.VITE_API_ENDPOINT);
    const getData = async () => {
      const response = await request.get(`/v1/estates/district/${districtId}`);
      console.log(response);
      // setSellLists(data);
    };

    getData();
  }, []);

  return <div>SellList</div>;
};

export default SellList;
