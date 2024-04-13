import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Product } from '../../../app/models/Product';
import ProductView from '../components/ProductView';

interface ProductDashboardProps {
  products: Product[];
}
export const ProductDashboard: React.FC<ProductDashboardProps> = ({
  products,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List divided relaxed>
          {products.map((product) => (
            <ProductView key={product.id} product={product} />
          ))}
        </List>
      </Grid.Column>
    </Grid>
  );
};
