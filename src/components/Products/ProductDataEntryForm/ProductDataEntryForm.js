import React from 'react';

import { Button } from 'components/Buttons/Button';
import {TextInput, TextArea, Label} from "./../../Forms"
import { ProductImageDropBox } from '../ProductImageDropBox';
import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductCategory, ProductManufacturer, ProductPrice, ProductDescription} from './styles'

function ProductDataEntryForm ({children, handleProductName, handleProductCategory, handleProductManufacturer, handleProductPrice, setProductImage, handleProductDescription, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
          <h2>Product Details</h2>
           <ProductImage>
            <Label>Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
           </ProductImage>
          <fieldset>
            <ProductCategory>
              <Label>Category</Label>
              <TextInput onChange={(e)=>handleProductCategory(e.target.value.trim())} maxLength={20}/>
            </ProductCategory>

            <ProductManufacturer>
              <Label>Manufacturer</Label>
              <TextInput onChange={(e)=>handleProductManufacturer(e.target.value.trim())} maxLength={30}/>
            </ProductManufacturer>
          </fieldset>
          <fieldset>
          <ProductPrice>
              <Label>Price</Label>
              <TextInput onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
            </ProductPrice>

            <ProductName>
              <Label>Name</Label>
              <TextInput onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
            </ProductName>

          </fieldset>
          <ProductDescription>
            <Label>Description</Label>
            <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={250}/>
          </ProductDescription>

          <Button>Add Product</Button>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm