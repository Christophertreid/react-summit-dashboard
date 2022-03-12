import * as s from './styles'
import { Link } from 'react-router-dom';
const Appbar = () => {
  return ( 
    <s.Bar>
      <s.BarContainer>
        <s.BarNav>
          <ul>
            <li><Link to='/profile'><svg aria-label='profile' strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"></path></svg></Link></li>
            <li><Link to='/notifications'><svg aria-label='notifications' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M295.68 351.43v.57h.32z"></path><path fill="none" d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32zm39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57z"></path><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z"></path></svg></Link></li>
            <li><Link to='/mail'><svg aria-label='mail' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z"></path></svg></Link></li>
            <li><Link to='/settings'><svg aria-label='settings' strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"></path></svg></Link></li>
            <li><Link to='/'><svg aria-label='logout' strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M160 240h160V96a16 16 0 00-16-16H64a16 16 0 00-16 16v320a16 16 0 0016 16h240a16 16 0 0016-16V272H160zm299.31 4.69L368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 000-22.62z"></path></svg></Link></li>
          </ul>
        

        

        

        

        

        </s.BarNav>
      </s.BarContainer>
    </s.Bar>
   );
}
 
export default Appbar;