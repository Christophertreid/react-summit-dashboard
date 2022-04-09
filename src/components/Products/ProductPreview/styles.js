import styled from 'styled-components';



const ProductPreviewStyles  = styled.div`
      width: 50%;
      padding: 1rem;
      h2{
        font-size: 1.5rem;
      }
`;
const ProductContainer = styled.div`
  box-shadow: 0 0 2px ${({theme})=> theme.colors.charcoal};
  border-radius: 0.5rem;
  padding: 1rem;
  width: fit-content;
  max-width: 25rem;
  p, h3{
    margin-top: 0.5rem;
  }
  div{
    display: flex;
    justify-content: space-between;
    gap:1rem;
  }
`;
const ProductImage = styled.div`
  margin: 1rem auto 0;
  width: 16rem;
  height: 12rem;
  overflow: hidden;
  border-radius: 0.25rem;
  img{
    margin: 0 auto;
    width: auto;
    height: 100%;
    border-radius: 0.25rem;
  }
`;
const ProductCategory = styled.p`
  text-transform: uppercase;
  color: ${({theme})=> theme.colors.ltGrey};
  font-size: 1rem;
`;
const ProductName = styled.h3`
  color: ${({theme})=> theme.colors.sumBlue};
  font-weight: bold;
  font-size: 1.5rem;
  word-wrap: break-word;
`;
const ProductPrice = styled.p`
  color: ${({theme})=> theme.colors.highVis}; 
  font-weight: bold;
  font-size: 1.5rem;
`;
const ProductManufacturer = styled.p`
  text-transform: uppercase;
  color: ${({theme})=> theme.colors.ltGrey};
  font-size: 1rem;
`;
const ProductDescription = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  margin-top: 1rem;
`;
export {ProductPreviewStyles,ProductContainer, ProductImage,ProductCategory,ProductName,ProductPrice,ProductManufacturer,ProductDescription }