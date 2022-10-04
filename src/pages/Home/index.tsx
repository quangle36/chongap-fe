import BreakingNews from '../../components/Sidebar/BreakingNews';
import CardProduct from 'components/CardProduct';
import UnderlineLink from 'components/UnderlineLink';
import HotEstates from 'pages/HotEstates/HotEstates';
import { Link } from 'react-router-dom';

function Home() {
  // console.log(import.meta.env.VITE_API_ENDPOINT);

  return (
    <>
      {/* <BreakingNews /> */}
      <HotEstates />
    </>
  );
}

export default Home;
