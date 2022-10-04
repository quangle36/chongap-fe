import BreakingNews from '../../components/Sidebar/BreakingNews';
import CardProduct from 'components/CardProduct';
import LiveSupport from 'components/Sidebar/LiveSupport';
import UnderlineLink from 'components/UnderlineLink';
import HotEstates from 'pages/HotEstates/HotEstates';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  // console.log(import.meta.env.VITE_API_ENDPOINT);

  return (
    <div className='flex'>
      <Outlet />
      <LiveSupport />
    </div>
  );
}

export default Layout;
