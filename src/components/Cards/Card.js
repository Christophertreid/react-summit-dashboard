import * as s from './styles'

const ProductCard = ({title, price, sku, category, manufacturer, img, description, ...props}) => {
  return (
<s.ProductCard>
  <s.ProductWindow src = {img} alt={title}/>
  <s.Details><span>{category}</span> <span>{sku}</span></s.Details>
  <s.Name>{title}</s.Name>
  <s.Details><span>${(price/100).toFixed(2)}</span> <span>{manufacturer}</span></s.Details>
  <s.Description>{description}</s.Description>
</s.ProductCard>
  );
};

export default ProductCard;