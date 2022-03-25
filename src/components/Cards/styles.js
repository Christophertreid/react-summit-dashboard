import styled from "styled-components";

const Details = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5rem;

span{
  display: block;
  width: fit-content;
}
`;

const ProductCard = styled.section`
  width: 16rem;
  height: fit-content;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 1px 1px 1px 2px ${({theme})=> theme.colors.ltGrey};
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  ${Details}:first-of-type{
    
    span:last-of-type{
    font-size: 1rem;
    }
}
  ${Details}:last-of-type{
    font-weight: 700;
    span:first-of-type{
    color: ${({theme})=> theme.colors.highVis};
}
  }
`;

const ProductWindow = styled.img`
  width: 12.8rem;
  box-shadow: 1px 1px 1px 2px ${({theme})=> theme.colors.ltGrey};
  border-radius: 0.5rem;
`;
const Name = styled.h2`
  color: ${({theme})=> theme.colors.sumBlue};
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
`;


const Description = styled.p`
font-style: italic;
text-align: left;
`;
export {ProductCard, ProductWindow, Name, Details, Description}