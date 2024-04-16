import React from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => (
  <>
    <NavBar />
    <Container style={{ marginTop: '7em' }}>
      <Outlet />
    </Container>
  </>
);

export default observer(App);
