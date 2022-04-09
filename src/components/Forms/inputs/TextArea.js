import styled from "styled-components"

const TextArea = styled.textarea`
  border-radius: 5px;
  width: 100%;
  height: 8rem;
  border: none;
  box-shadow: 0 0 2px ${({theme})=> theme.colors.charcoal};
`
export default TextArea;