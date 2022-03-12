import styled from "styled-components";
import treesRear from '../../assets/svg/trees-rear.svg'
import treesMid from '../../assets/svg/trees-mid.svg'
import treesFront from '../../assets/svg/trees-front.svg'
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat bottom/100% url(${treesFront}),no-repeat bottom/100% url(${treesMid}), no-repeat bottom/100% url(${treesRear}) ;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const LoginContainer = styled.div`
  border-radius: 10px;
  background: #fff;
  display:flex;
  overflow: hidden;
  box-shadow: 1px 1px 5px ${({theme})=> theme.colors.charcoal    };
  @media screen and (min-width: 768px){
    width: 45rem;
    height: 33rem;
  }
`
const LogoContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px){
    display: block;
    width: 50%;
    height: 100%;
    background: ${({theme})=> theme.colors.sumBlue};
    display: flex;
    justify-content: center;
    align-items: center;}
`
const FormContainer = styled.div`
  height: 100%;
  background: ${({theme})=> theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({theme})=> theme.colors.sumBlue};
  @media screen and (min-width: 768px){
    width: 50%;}
`
const FormHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FormLogo = styled.svg`
width: 46px;
height: 46px;
@media screen and (min-width: 768px){
  display: none;
}
`
export {Background, LoginContainer, LogoContainer, FormContainer, FormHeading, FormLogo} 