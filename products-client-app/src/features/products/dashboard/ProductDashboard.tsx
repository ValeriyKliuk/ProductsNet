import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Product } from '../../../app/models/Product';
import { ProductList } from '../components/ProductList';
import { ProductDetails } from '../components/ProductDetails';

interface ProductDashboardProps {
  products: Product[];
}
export const ProductDashboard: React.FC<ProductDashboardProps> = ({
  products,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList products={products} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProductDetails product={products[0]} />
      </Grid.Column>
    </Grid>
  );
};
