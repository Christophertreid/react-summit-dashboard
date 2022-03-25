import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  a{
    text-align: right;
    margin-top: 0.75rem;
    &:hover, &:focus{
    color: ${({theme})=> theme.colors.ltBlue};
    }
  }
  h1,h2,h3{
    font-family: Roboto-900;
    color: ${({theme})=> theme.colors.sumBlue};
    font-size: 1.125rem;
  }
`
export default Form;