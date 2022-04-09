import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
  width: calc(50%);
  height: 100%;
  padding: 1rem;
  h2{
    font-size: 1.5rem;
    } 
  fieldset{
    display: flex;
    gap: 1rem;
  }
`;

const ProductImage = styled.div`

`;

const ProductName = styled.div`
  flex: 2;
`;

const ProductCategory = styled.div`
  flex: 1;
`;

const ProductManufacturer = styled.div`
  flex: 2;
  `;

const ProductPrice = styled.div`
  flex: 1;
`;

const ProductDescription = styled.div`
  textarea{
    resize: none;
  }
`;

export {ProductDataEntryFormStyles, ProductImage, ProductName, ProductCategory, ProductManufacturer, ProductPrice, ProductDescription}