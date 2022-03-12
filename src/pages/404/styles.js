import styled from "styled-components";
import trees from '../../assets/svg/trees-front.svg'


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat bottom/100% url(${trees}) ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`
const GpsContainer = styled.div`
  margin-top: 2rem;
  height: 80%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
const Gps = styled.img`
position: relative;
z-index: 1;
height: 100%;
`
const GpsScreen = styled.div`
position: absolute;
top: 30%;
left: 25%;
height: 40%;
aspect-ratio: 0.75;
overflow: hidden;

@media screen and (min-width: 768px){
  top: 30%;
  left: 10%;
  width: 80%;
  height: 40%;
}
`
const MessageContainer = styled.div`
  height: 50%;
  width: 80%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: start;
  @media screen and (min-width: 768px){
    height: 100%;
    width: 50%;
    align-items: center;
  }
`
const Message = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: rgba(255,255,255,0.75);
  text-align: center;
  h1{
    font-size: 4rem;
  }
  p{
    font-size: 2rem;
  }
  span, button{
    color: ${({theme})=> theme.colors.highVis    };
    font-weight: 700;
  }
  p:first-of-type{
    font-family: Righteous, Roboto-900, sans-serif;
  }
  p:last-of-type{
    font-family: Roboto, sans-serif;
    margin-top: 2rem;
  }
  @media screen and (min-width: 768px){
    margin-left: 2rem;
    h1{
    font-size: 16vh;

  }
  p:first-of-type{
    font-size: 5vh;
    font-family: Righteous, Roboto-900, sans-serif;
  }
  p:last-of-type{
    font-size: 5vh;
    font-family: Roboto, sans-serif;
    margin-top: 2rem;
  }
  }
`
export {Background,GpsContainer, Gps, GpsScreen, MessageContainer, Message}