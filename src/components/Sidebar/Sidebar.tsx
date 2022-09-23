import Header from '../Header';
import Layout from '../Layout';
import HeaderMenu from './SidebarMenu';
import Accordion from 'components/Accordion/Accordion';
import Footer from 'components/Footer';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { commonStrings } from 'translation/vi';
import { stringUtils } from 'utils/string';

const Sidebar = () => {
  const [activeId, setActiveId] = useState(0);

  const district = [
    {
      id: 1,
      name: 'Quận 1',
    },
    {
      id: 2,
      name: 'Quận 2',
    },
    {
      id: 3,
      name: 'Quận 3',
    },
    {
      id: 4,
      name: 'Quận Bình Thạnh',
    },
    {
      id: 5,
      name: 'Quận Thủ Đức',
    },
  ];

  const categories = [
    {
      id: 1,
      name: 'Đất TP.HCM',
      url: 'dat-tp-hcm',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Bình Thạnh',
        'Thủ Đức',
      ],
    },
    {
      id: 2,
      name: 'Nhà bán TP.HCM',
      url: 'nha-ban-tp-hcm',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Bình Thạnh',
        'Thủ Đức',
      ],
    },
  ];

  return (
    <>
      <div className='drawer '>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          <Header />
          <main className={'grow lg:mx-0'}>
            <Outlet />
          </main>
          <Footer />
        </div>
        <div className='drawer-side overflow-y-auto '>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content mb-0'>
            <p className='text-main-blue  font-bold'>Vạn Phúc Thịnh</p>
            <div className='flex justify-around pt-2'>
              <a href='/signin' className='text-main-blue font-bold'>
                {commonStrings.signIn}
              </a>
              <a href='/register' className='text-main-blue font-bold'>
                {commonStrings.signUp}
              </a>
            </div>
            <li>
              <Link to='/'>Trang chủ</Link>
            </li>

            {categories.map((category) => (
              <Accordion
                key={category.id}
                title={category.name}
                onToggleActive={() => {
                  setActiveId(category.id);
                }}
                active={activeId === category.id ? true : false}
              >
                {
                  <ul className='flex flex-col'>
                    {category.district.map((district) => {
                      const deAccentDistrict = stringUtils.deAccent(district);
                      const districtUrl =
                        stringUtils.hyphenBetweenWords(deAccentDistrict);

                      return (
                        <li key={district}>
                          <Link to={`${category.url} ${districtUrl}`}>
                            {district}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                }
              </Accordion>
            ))}
          </ul>
          {/* <HeaderMenu /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
