import {Routes, Route} from 'react-router-dom';
import {DashboardPage, LoginPage, PageNotFound} from './pages'
function App() {
  return (
    
    <Routes>
      <Route index element = {<LoginPage/>}/>
      <Route path = '/dashboard/*' element = {<DashboardPage/>}/>
      <Route path = '/*' element = {<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
