import * as s from './styles'

const Panel = ({title, ...props}) => {
  return (
    <s.Panel>
      <s.PanelSection>
        <s.Header>
          <h1>{title || "Panel" }</h1>
        </s.Header>
        <s.Body>

        </s.Body>
        <s.Footer>
          {/*Pagination */}
        </s.Footer>
      </s.PanelSection>
    </s.Panel>

  );
}
 
export default Panel;
