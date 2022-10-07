import CardProduct from 'components/CardProduct';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
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
  address: {
    province: string;
    district: string;
    ward: string;
    street: string;
  };
}

const SellList = () => {
  const [sellLists, setSellLists] = useState<Estate[]>([]);
  const [title, setTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(undefined);
  const { districtId, abc } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // console.log(window.location.pathname);
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await request.get(
          `/v1/estates/district/${districtId}?page=${currentPage}`
        );
        console.log('response', response);

        setIsLoading(false);
        setTitle(response.data.title);
        setSellLists(response.data.estates);
        setTotalPages(response.data.totalPages);
      } catch (eror) {
        setIsLoading(false);
        setError(error);

        console.log('error', eror);
      }
    };

    getData();
  }, [districtId, currentPage, location]);

  console.log(error);
  if (error) {
    return <div className='text-center text-2xl'>Something went wrong</div>;
  }
  return (
    <>
      {/* <Outlet /> */}
      {isLoading ? (
        <PulseLoader size={50} color='#4487C7' className='m-auto mt-52' />
      ) : (
        <div className='flex flex-col mr-4'>
          <div className='flex flex-col border-l-[1px] border-r-[1px] border-main-blue'>
            <div className='bg-main-blue text-white font-semibold lg:w-full py-2 px-8'>
              {title}
            </div>
            {sellLists.map((item) => (
              <>
                <CardProduct
                  date={'1 giờ trước'}
                  numberOfImages={3}
                  mainImage='http://datsohongbinhduong.com/wp-content/uploads/2019/05/ban-dat-duong-dx08-212m2-610x380.jpg'
                  description={item.description}
                  location={item.address.ward}
                  totalArea={item.totalArea}
                  price={item.price}
                  title={item.title}
                  key={item._id}
                  slug={item.slug}
                />
                <div className='border-b-[1px] border-main-blue'></div>
              </>
            ))}
          </div>
          {/* <div className='btn-group mt-4'>
            {Array.from(Array(totalPages).keys()).map((item) => {
              return (
                <button
                  onClick={() => {
                    navigate(`?page=${item + 1}`);
                    setCurrentPage(item + 1);
                  }}
                  key={item}
                  className={`btn ${
                    item === currentPage - 1 ? 'btn-active' : ''
                  }`}
                >
                  {item + 1}
                </button>
              );
            })}
          </div> */}
        </div>
      )}
    </>
  );
};

export default SellList;
