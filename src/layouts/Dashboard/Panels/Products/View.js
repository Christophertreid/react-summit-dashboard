import {useGetAllProducts} from 'hooks/useGetAllProducts';
import * as s from './styles'
import ProductCard from 'components/Cards/Card';

const Panel = ({title, ...props}) => {

  const productData = useGetAllProducts()

  return (
    <s.Panel>
      <s.PanelSection>
        <s.Header>
          <h1>{title || "Panel" }</h1>
        </s.Header>
        <s.Body>
          {productData? productData.map(product =><ProductCard key={product.uid} product={product}/>) : <p>Products loading...</p>}
        </s.Body>
        <s.Footer>
          {/*Pagination */}
        </s.Footer>
      </s.PanelSection>
    </s.Panel>

  );
}
 
export default Panel;
