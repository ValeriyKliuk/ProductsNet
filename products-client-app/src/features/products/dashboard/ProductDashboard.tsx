import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Product } from '../../../app/models/Product';
import { ProductList } from '../components/ProductList';
import { ProductDetails } from '../components/ProductDetails';
import { ProductForm } from '../components/ProductForm';

interface ProductDashboardProps {
  products: Product[];
  selectedProduct: Product | undefined;
  selectProduct: (id: string) => void;
  cancelSelectProduct: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (product: Product) => void;
  deleteProduct: (id: string) => void;
  submitting: boolean;
}
export const ProductDashboard: React.FC<ProductDashboardProps> = ({
  products,
  selectedProduct,
  selectProduct,
  cancelSelectProduct,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteProduct,
  submitting,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList
          products={products}
          selectProduct={selectProduct}
          deleteProduct={deleteProduct}
          submitting={submitting}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedProduct && !editMode && (
          <ProductDetails
            product={selectedProduct}
            cancelSelectProduct={cancelSelectProduct}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ProductForm
            closeForm={closeForm}
            product={selectedProduct}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
