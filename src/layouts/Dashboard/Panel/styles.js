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
}
`
export {Panel}