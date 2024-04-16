import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Product } from '../../../app/models/Product';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LoadingView } from '../../../app/layout/LoadingView';
import { v4 as uuid } from 'uuid';

const ProductForm: React.FC = () => {
  const {
    productStore: {
      selectedProduct,
      createProduct,
      updateProduct,
      loading,
      loadProduct,
      loadingInitial,
    },
  } = useStore();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const initialState: Product = {
    id: '',
    name: '',
    shortName: '',
    description: '',
    shortDescription: '',
    price: 0,
    category: '',
    image: '',
    height: 0,
    width: 0,
    depth: 0,
    weight: 0,
    quantity: 0,
    rating: 0,
    color: '',
    shipping: '',
    date: '',
  };

  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    if (id) {
      loadProduct(id).then(() => {
        setProduct(selectedProduct!);
      });
    }
  }, [id, loadProduct, selectedProduct]);

  const handleSubmit = () => {
    if (product.id === '') {
      product.id = uuid();
      createProduct(product).then(() => navigate(`/products/${product.id}`));
    } else {
      updateProduct(product).then(() => navigate(`/products/${product.id}`));
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  if (loadingInitial) return <LoadingView content='Loading product...' />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          placeholder='Name'
          name='name'
          value={product.name}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='ShortName'
          name='shortName'
          value={product.shortName}
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder='Description'
          name='description'
          value={product.description}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='ShortDescription'
          name='shortDescription'
          value={product.shortDescription}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Price'
          name='price'
          type='number'
          value={product.price}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Category'
          name='category'
          value={product.category}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Image'
          name='image'
          value={product.image}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Height'
          name='height'
          type='number'
          value={product.height}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Width'
          name='width'
          type='number'
          value={product.width}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Depth'
          name='depth'
          type='number'
          value={product.depth}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Weight'
          name='weight'
          type='number'
          value={product.weight}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Quantity'
          name='quantity'
          type='number'
          value={product.quantity}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Rating'
          name='rating'
          type='number'
          value={product.rating}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Color'
          name='color'
          value={product.color}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Shipping'
          name='shipping'
          value={product.shipping}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Date'
          name='date'
          type='date'
          value={product.date}
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          floated='right'
          positive
          type='submit'
          content='Submit'
        />
        <Button
          as={Link}
          to='/products'
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default observer(ProductForm);
