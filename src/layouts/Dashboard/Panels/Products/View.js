import * as s from './styles'
import ProductCard from 'components/Cards/Card';
import tent from 'assets/img/tent.jpg'
const Panel = ({title, ...props}) => {
  return (
    <s.Panel>
      <s.PanelSection>
        <s.Header>
          <h1>{title || "Panel" }</h1>
        </s.Header>
        <s.Body>
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          <ProductCard img = {tent} title="MSR Hubba Hubba" category="TENT" sku="123456" price={49900} manufacturer="MSR"
            description="A one person backing tent perfect for the solo traveler."
          />
          
        </s.Body>
        <s.Footer>
          {/*Pagination */}
        </s.Footer>
      </s.PanelSection>
    </s.Panel>

  );
}
 
export default Panel;
