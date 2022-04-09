import React from 'react';

import {ProductDataEntryForm} from "./../ProductDataEntryForm"
import { ProductPreview } from "./../ProductPreview";
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, handleProductName, productCategory, handleProductCategory, productManufacturer, handleProductManufacturer, productPrice, handleProductPrice, productImage, setProductImage, productDescription, handleProductDescription, handleSubmit, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
            <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductCategory={handleProductCategory}
            handleProductManufacturer={handleProductManufacturer}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleProductDescription={handleProductDescription}
            handleSubmit={handleSubmit}
            />
            <ProductPreview 
            productName={productName}
            productCategory={productCategory}
            productManufacturer={productManufacturer}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
            />
        </ProductEditorStyles>
  )
}

export default ProductEditor