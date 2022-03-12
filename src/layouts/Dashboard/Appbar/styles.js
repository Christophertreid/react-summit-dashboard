import styled from "styled-components";

const Bar = styled.div`
position: sticky;
top: 0;
width: 100vw;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme})=> theme.colors.white};
box-shadow: 1px 1px 2px ${({theme})=> theme.colors.charcoal};
`
const BarContainer = styled.div`
width: 100%;
//max-width: calc(1440px - 249px - 1.5rem);
display: flex;
justify-content: end;
`
const BarNav = styled.nav`
ul{
  display: flex;
  gap: 1rem;
}
li{
  list-style: none;
}
width: 13rem;
svg{
  height: 1.5rem;
  width: 1.5rem;
  fill: ${({theme})=> theme.colors.sumBlue}
}
`
export {Bar, BarContainer, BarNav}