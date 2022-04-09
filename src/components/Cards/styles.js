import styled from "styled-components";

const Details = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;

span{
  display: block;
  width: fit-content;
}
span:first-child{
      text-transform: uppercase;
    }
span:last-child{
  opacity: 0.5;
}
`;

const ProductCard = styled.section`
  width: 20rem;
  height: 38.5rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 2px 2px ${({theme})=> theme.colors.ltGrey};
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;

  ${Details}:last-of-type{
    font-weight: 700;
    span:first-of-type{
    color: ${({theme})=> theme.colors.highVis};
    }
    span:last-of-type{
      opacity: 1;
    }
  }
  button{
    width: 5rem;
    margin: 1rem;
  }
  button:last-of-type{
    background-color: ${({theme})=> theme.colors.highVis};
  }
`;

const ProductWindow = styled.div`
  width: 12.8rem;
  height: 12.8rem;
  box-shadow: 0px 0px 1px 1px ${({theme})=> theme.colors.ltGrey};
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height:100%;
  }
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