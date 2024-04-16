import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export const HomePage: React.FC = () => (
  <Container style={{ marginTop: '7em' }}>
    <h1>Welcome to the Products App</h1>
    <h3>
      Click on the <Link to='/products'>Products link</Link> to view the
      products
    </h3>
  </Container>
);
