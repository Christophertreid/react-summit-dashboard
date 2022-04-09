import styled from "styled-components";

const Panel = styled.div`
background-color: ${({theme})=> theme.colors.white};
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  margin-left: calc(4.5rem);
  margin-top: 0.5rem; 
  padding: 1rem;
  
@media screen and (min-width: 768px){ 
  width: calc(100vw - 217px - 1rem);
  height: calc(100vh - 5rem);
  margin-left: calc(217px + 0.5rem);
  margin-top: 0.5rem;
}`;

const PanelSection = styled.section
`
  height:100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div
`
  height: 3rem;
  padding-bottom: 2rem; 
  color: ${({theme})=> theme.colors.sumBlue};
  border-bottom: 2px solid ${({theme})=> theme.colors.ltGrey}; 
`;
const Body = styled.div
`
  height: calc(100% - 3rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  overflow-y: scroll;
  color: ${({theme})=> theme.colors.charcoal};
`;
const Footer = styled.div`
  height: 1rem;
  border-top: 2px solid ${({theme})=> theme.colors.ltGrey}; 
`;
export {Panel, PanelSection, Header, Body, Footer}
