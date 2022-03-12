import styled from "styled-components";
import trees from '../../../assets/svg/trees-light.svg'
import { Link } from "react-router-dom";
const Sidebar = styled.div`
position: absolute;
top: 4rem;
left: 0;
height: calc(100vh - 4rem);
width:4rem;
padding: 5rem 1rem;
background-color: ${({theme})=> theme.colors.sumBlue};
background: bottom center no-repeat url(${trees}), ${({theme})=> theme.colors.sumBlue};
@media screen and (min-width: 768px){
  width: 217px;
}
`
const PageLink = styled(Link)`
display: flex;
gap: 1rem;
padding: 0.5rem 0;
color: ${({theme})=> theme.colors.white};
&:hover{
  text-decoration: underline;
  cursor: pointer;
}
span:last-child{
  display: none;
}
span svg{
  width: 2rem;
  height: 2rem;
  fill: ${({theme})=> theme.colors.white};
}
@media screen and (min-width: 768px){
  margin-left: 1.5rem;
  span:last-child{
  display: block;
  }
  span svg{
    width: 1rem;
    height: 1rem;
  }
}
`
const PageSection = styled.div`
width: 100%;
border-bottom: 1px solid ${({theme})=> theme.colors.white};
`
const SideLogo = styled.picture`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, -50%);
`
export {Sidebar, PageLink, PageSection, SideLogo}