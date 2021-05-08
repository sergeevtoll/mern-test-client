import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, ItemMenu, Header, Links } from '../styles/styles';
import { AuthContext } from '../context/AuthContext';

const Menu = () => {
  const auth = useContext(AuthContext)
  const history = useHistory();
  const linkData = [
    { name: 'Загрузить файл', url: '/upload' },
    { name: 'Каталог', url: '/catalog' },
    { name: 'Настройки', url: '#' }
  ];

  const handleExit = () => {
    auth.logout()
    history.push('/')
  }

  return (
    <Header>
      <Links>
        {linkData.map((item, i) =>
          <Link key={`${i}-key`} to={item.url}>
            <ItemMenu>{item.name}</ItemMenu>
          </Link>
        )}
      </Links>
      <Button onClick={handleExit} className='disabled'>Выйти</Button>
    </Header>
  )
};

export default Menu;
