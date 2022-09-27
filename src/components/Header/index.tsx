import LogoIcon from './LogoIcon';
import { categories, standardDistrict } from 'components/Sidebar';
import UnderlineLink from 'components/UnderlineLink';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { commonStrings } from 'translation/vi';

const Header = () => {
  return (
    <div className='navbar bg-white text-black shadow-lg lg:justify-center'>
      <div className='navbar-start flex lg:hidden'>
        <div className='dropdown drawer-button'>
          <label
            htmlFor='my-drawer'
            tabIndex={0}
            className='btn btn-ghost lg:hidden drawer-button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
        </div>
      </div>
      <div className='navbar-center'>
        <LogoIcon className='hidden lg:inline-block' />
        <div className='text-main-blue text-xl font-bold hidden md:inline-block lg:hidden'>
          {commonStrings.brandName.toUpperCase()} -{' '}
          {commonStrings.brandSlogan.toUpperCase()}
        </div>
        <div className='hidden lg:flex'>
          {categories.map((category) => (
            <div key={category.id} className='dropdown dropdown-hover ml-8'>
              <UnderlineLink title={category.name} />
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 text-sm'
              >
                {category.subCategories.map((subCategoriesItem) => {
                  const subCategoriesUrl = standardDistrict(subCategoriesItem);
                  return (
                    <li key={subCategoriesItem}>
                      <Link to={`${category.url}/${subCategoriesUrl}`}>
                        {subCategoriesItem}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='navbar-end flex lg:hidden'>
        <LogoIcon />
      </div>
    </div>
  );
};

export default Header;
