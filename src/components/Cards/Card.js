import * as s from './styles'
import { Button } from 'components/Buttons/Button';
const ProductCard = ({children, product, ...props}) => {
  const {productName, productPrice, uid, productCategory, productManufacturer, imgURL, productDescription} = {...product}

  function cutUID (string, limit){
    return string.substring(1, limit)
  }
  return (
<s.ProductCard>
  <s.ProductWindow><img src = {imgURL} alt={productName} /></s.ProductWindow>
  <s.Details><span>{productCategory}</span><span>{cutUID(uid, 10)}</span></s.Details>
  <s.Name>{productName}</s.Name>
  <s.Details><span>${productPrice}</span> <span>{productManufacturer}</span></s.Details>
  <s.Description>{productDescription}</s.Description>
  <Button>Edit</Button>
  <Button>Delete</Button>
</s.ProductCard>
  );
};

export default ProductCard;