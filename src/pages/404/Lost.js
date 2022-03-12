import * as s from './styles'
import {Link, useNavigate} from 'react-router-dom'
import map from '../../assets/img/map.png'
import gps from '../../assets/svg/gps.svg'
import { InvisButton } from '../../components/Buttons/Button'
const Lost = () => {

  const navigate = useNavigate();
  return ( 
    
    <s.Background>
      <s.GpsContainer>
        <s.GpsScreen><img src={map} alt="map"/></s.GpsScreen>
        <s.Gps src={gps} alt="gps"/>
      </s.GpsContainer>
      <s.MessageContainer>
        <s.Message>
          <h1>Uh oh!</h1>
          <p>Looks like you're lost...</p>
          <p>Head <Link to="/"><span>home</span></Link> or back to the <InvisButton onClick={() => {navigate(-1)}}>previous page</InvisButton></p>
        </s.Message>
      </s.MessageContainer>
    </s.Background>


   );
}
 
export default Lost;
