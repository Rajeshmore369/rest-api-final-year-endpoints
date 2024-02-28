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
    <Header className="header">
      <div className="logo" style={{color:"#fff"}} >saveHer</div>
    </Header>
  );
};

export default Navbar;
