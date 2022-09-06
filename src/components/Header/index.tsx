import { motion } from 'framer-motion';
import React from 'react';

import LogoIcon from './LogoIcon';

const Header = () => {
  return (
    <div className="navbar bg-white text-black shadow-lg mb-4">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li className="bg-white">
                <a
                  className="bg-slate-300 active:bg-yellow-500 active:text-white "
                  href="https://google.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Submenu 1
                </a>
              </li>

              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="hover:bg-transparent ">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <LogoIcon className="lg:hidden" />
      </div>
    </div>
  );
};

export default Header;
