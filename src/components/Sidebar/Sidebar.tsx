import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';

import Header from '../Header';
import Layout from '../Layout';
import HeaderMenu from './SidebarMenu';

const Sidebar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <main className={'flex-auto lg:mx-0 h-screen'}>
            <Outlet />
          </main>
          <Footer />
        </div>
        <div className="drawer-side overflow-y-auto ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content mb-0">
            <p className="text-main-blue font-bold">Vạn Phúc Thịnh</p>
            <div className="flex justify-around pt-2">
              <p className="text-main-blue font-bold">Đăng nhập</p>
              <p className="text-main-blue font-bold">Đăng kí</p>
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
