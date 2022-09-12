import Header from '../Header';
import Layout from '../Layout';
import HeaderMenu from './SidebarMenu';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
import { commonStrings } from 'translation/vi';

const Sidebar = () => {
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
            <p className='text-main-blue font-bold'>Vạn Phúc Thịnh</p>
            <div className='flex justify-around pt-2'>
              <a href='/signin' className='text-main-blue font-bold'>
                {commonStrings.signIn}
              </a>
              <a href='/register' className='text-main-blue font-bold'>
                {commonStrings.signUp}
              </a>
            </div>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item le</a>
            </li>
          </ul>
          {/* <HeaderMenu /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
