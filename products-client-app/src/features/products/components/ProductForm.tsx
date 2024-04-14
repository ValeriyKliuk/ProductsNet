import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Product } from '../../../app/models/Product';

interface ProductFormProps {
  product: Product | undefined;
  closeForm: () => void;
  createOrEdit: (product: Product) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product: selectedProduct,
  closeForm,
  createOrEdit,
}) => {
  const initialState: Product = selectedProduct ?? {
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

  const handleSubmit = () => {
    createOrEdit(product);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

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
          value={product.height}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Width'
          name='width'
          value={product.width}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Depth'
          name='depth'
          value={product.depth}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Weight'
          name='weight'
          value={product.weight}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Quantity'
          name='quantity'
          value={product.quantity}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Rating'
          name='rating'
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
          value={product.date}
          onChange={handleInputChange}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          floated='right'
          type='button'
          content='Cancel'
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
};
