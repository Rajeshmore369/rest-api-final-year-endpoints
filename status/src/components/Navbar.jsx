import React, { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header class="header" id="header" >
      <nav class="nav container">
        <a href="#" class="nav__logo">Avez.</a>
        <div class="nav__menu">
          <ul class="nav__list">
            <li class="nav__item"> <a href="#home" class="nav__link active-link"><i class='bx bx-home'></i></a>
            </li>
            <li class="nav__item"> <a href="#alerts" class="nav__link active-link"><i class='bx bx-alarm-exclamation'></i></a> </li>
          </ul>
        </div>
        <i class='bx bx-moon change-theme' id="theme-button"></i>
      </nav>
    </header>
  );
};

export default Navbar;
