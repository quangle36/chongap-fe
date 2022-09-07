import { motion } from 'framer-motion';
import React from 'react';

import UnderlineLink from 'components/UnderlineLink';

import LogoIcon from './LogoIcon';

const Header = () => {
  return (
    <div className="navbar bg-white text-black shadow-lg ">
      <div className="navbar-start">
        <LogoIcon className="hidden lg:inline-block" />
        <div className="dropdown drawer-button">
          <label
            htmlFor="my-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="dropdown dropdown-hover ml-8">
          <UnderlineLink title="Nhà đất Quận 10" />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 text-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <LogoIcon className="lg:hidden" />
      </div>
    </div>
  );
};

export default Header;
