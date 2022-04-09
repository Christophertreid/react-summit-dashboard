import React, {useState} from 'react';

import {AddProductPanelStyles} from './styles'
import {ProductEditor} from "components/Products/ProductEditor"
import { EditorFeedback } from 'components/Products/EditorFeedback';
import {useNumberFormat} from "hooks/useNumberFormat"
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import logo from "assets/svg/summit-med.svg"
function AddProductPanel ({children, ...props})  {

  const[isWriting, setIsWriting] = useState(false);
  const [loading, loader] = useAddNewProduct();
  
  const defaults ={
    name: 'Product Name',
    category: 'Category',
    manufacturer: 'Manufacturer',
    price: 100.00,
    description: 'A short description... 250 characters or less',
  }

  function handleSubmit (e){
    e.preventDefault();
    const productData ={
      productName,
      productCategory,
      productManufacturer,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    loader(productData, productImage.file)
    setProductName(defaults.name);
    setProductCategory(defaults.category);
    setProductManufacturer(defaults.manufacturer);
    setProductPrice(defaults.price);
    setProductDescription(defaults.description);
  }

  //product name
  const [productName, setProductName] = useState(defaults.name);

  function handleProductName(name) {
    setProductName(name)
  }
  //product category
  const [productCategory, setProductCategory] = useState(defaults.category);
  function handleProductCategory(category) {
    setProductCategory(category)
  }
  //manufacturer
  const [productManufacturer, setProductManufacturer] = useState(defaults.manufacturer);
  function handleProductManufacturer(manufacturer) {
    setProductManufacturer(manufacturer)
  }
  //price
  const numberFormatter = useNumberFormat();
  const [productPrice, setProductPrice] = useState(defaults.price);
  function handleProductPrice(price) {
    setProductPrice(numberFormatter(price))
  }
  //description
  const [productDescription, setProductDescription] = useState(defaults.description);
  function handleProductDescription(description) {
    setProductDescription(description)
  }
  
  //image
  const [productImage, setProductImage] = useState({previewImage:logo, file:null})

  if(isWriting){
    return <EditorFeedback status={loading} writeCompleted={setIsWriting}/>
  }
  else{
    return (
      <AddProductPanelStyles  {...props}>
         <ProductEditor 
         productName = {productName} handleProductName={handleProductName} 
         productCategory={productCategory} handleProductCategory={handleProductCategory}
         productManufacturer={productManufacturer} handleProductManufacturer={handleProductManufacturer}
         productPrice={productPrice} handleProductPrice={handleProductPrice}
         productImage={productImage} setProductImage={setProductImage}
         productDescription={productDescription} handleProductDescription={handleProductDescription}
         handleSubmit={handleSubmit}
         />

      </AddProductPanelStyles>
)
  }
  
}

export default AddProductPanel