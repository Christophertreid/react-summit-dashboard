import styled from "styled-components"

const Button = styled.button`
  display: block;
  margin: 0.75rem 0 0.25rem 0;
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.sumBlue};
  color: ${({theme})=> theme.colors.white};
  &:hover, &:focus{
    opacity: 0.9;
  }
  `
const InvisButton = styled.button`
  border: none;
  background: none;
  color: ${({theme})=> theme.colors.white};
`

export {Button, InvisButton};