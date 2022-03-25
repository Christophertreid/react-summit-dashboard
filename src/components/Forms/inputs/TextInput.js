import styled from "styled-components"

const TextInput = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  border: none;
  box-shadow: 0 0 2px ${({theme})=> theme.colors.charcoal};
`
export default TextInput;