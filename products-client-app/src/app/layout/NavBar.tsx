import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import viteLogo from '/vite.svg';

interface NavBarProps {
  openForm: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ openForm }) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src={viteLogo} alt='Vite logo' style={{ marginRight: '10px' }} />
          ProductsNet
        </Menu.Item>
        <Menu.Item name='Products' />
        <Menu.Item>
          <Button positive content='Create Product' onClick={openForm} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
