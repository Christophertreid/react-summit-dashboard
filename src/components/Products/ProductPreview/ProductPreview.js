import React from 'react';

import {ProductPreviewStyles, ProductContainer, ProductImage,ProductCategory,ProductName,ProductPrice,ProductManufacturer,ProductDescription} from './styles'

function ProductPreview ({children, productName, productCategory, productManufacturer, productPrice, productImage, productDescription, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
           <h2>Preview</h2>
           <ProductContainer>
            <ProductImage>
              <img src={productImage.previewImage} alt={productName} width="320" height="184"/>
            </ProductImage>
            <div>
              <ProductCategory>{productCategory}</ProductCategory>
              <ProductManufacturer>{productManufacturer}</ProductManufacturer>
            </div>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
           </ProductContainer>
        </ProductPreviewStyles>
  )
}

export default ProductPreview