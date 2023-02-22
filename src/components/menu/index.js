import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const items = [
  {
    label: (
      <Link to="/showlists">Listas</Link>
    ),
    key: 'lists',
    icon: <UnorderedListOutlined />,
  },
  {
    label: (
      <Link to="/add-list">Nova lista</Link>
    ),
    key: 'add-list',
    icon: <PlusOutlined />,
  }
];

const MenuApp = (props, context) => {
  return (
    <Menu 
      mode="horizontal" 
      items={items}
      style={{
        backgroundColor: "#f1f1f1"
      }}
    />
  );
}

export default MenuApp;