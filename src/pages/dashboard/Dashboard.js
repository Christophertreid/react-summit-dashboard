import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import {onAuthStateChanged} from 'firebase/auth'
import {auth} from 'libs/firebase'

import * as s from './styles'
import Appbar from '../../layouts/Dashboard/Appbar/Appbar'
import Sidebar from '../../layouts/Dashboard/Sidebar/Sidebar'


const Dashboard = (props) => {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user)=>{
    if(user){
      setIsUser(true)
    }
    else{
      setIsUser(false)
      navigate('/')
    }
  })
  if(isUser)
  {
    return ( 
      <s.Background>
        <Appbar />
        <Sidebar />
        <Outlet/>
      </s.Background>
    );
  }
  else{
    return null;
  }
}
 
export default Dashboard;