import { AddProductsPanel, ViewProductsPanel, EditProductsPanel } from 'layouts/Dashboard/Panels';
import {Routes, Route} from 'react-router-dom';
import {DashboardPage, LoginPage, PageNotFound} from './pages'

function App() {
  return (
    
    <Routes>
      <Route path="/" element = {<LoginPage/>}/>
      <Route path = '/dashboard' element = {<DashboardPage/>}>
        <Route index element = {<ViewProductsPanel title="View Products"/>}/>
        <Route path="add" element ={<AddProductsPanel title="Add Products"/>}/>
        <Route path="edit" element ={<EditProductsPanel title="Edit Products"/>}/>
      </Route>
      <Route path = '/*' element = {<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
