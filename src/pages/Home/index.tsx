import CardProduct from 'components/CardProduct';
import UnderlineLink from 'components/UnderlineLink';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from 'services/userService';

function Home() {

  const [user, setUser] = useState<{} | null>(null);
  
  const login = () => {
    UserService.login('hai@gmail.com', '123456').then((response) => {
      setUser(response.data);
    });
  };

  return (
    <div>
      <h1>This is the home page</h1>
      Button to login <button onClick={login}>Login</button>
      <Link className={''} to='/about'>
        Click to view our about page
      </Link>
      <Link to='/contact'>Click to view our contact page</Link>
      <CardProduct
        title='Mua trực tiếp chủ đầu tư, HaNoi Melody Linh Đàm(HMR) chiết khấu tới 23%. Hỗ trợ 24 tháng không lãi.'
        price='3'
        mainImage='https://file4.batdongsan.com.vn/crop/200x140/2022/09/05/20220905091555-75ad_wm.jpg'
        location='Ho Chi Minh City'
        date='Hom nay'
        numberOfImages={9}
        area={'81'}
        description='
        Bán tổng hợp quỹ căn Vinhomes Smart City từ 1 phòng ngủ đến 3 phòng ngủ, kí trực tiếp chủ đầu tư, quỹ căn trong đại đô thị Vinhomes Smart City giá tốt nhất thị trường...* Chỉ từ 200 triệu, quý khách ...
    '
      />
      <UnderlineLink title='hello' />
    </div>
  );
}

export default Home;
