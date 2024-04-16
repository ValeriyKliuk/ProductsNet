import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import viteLogo from '/vite.svg';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as={NavLink} to='/' header>
        <img src={viteLogo} alt='Vite logo' style={{ marginRight: '10px' }} />
        ProductsNet
      </Menu.Item>
      <Menu.Item as={NavLink} to='/products' name='Products' />
      <Menu.Item>
        <Button
          as={NavLink}
          to='/createProduct'
          positive
          content='Create Product'
        />
      </Menu.Item>
    </Container>
  </Menu>
);

export default NavBar;
