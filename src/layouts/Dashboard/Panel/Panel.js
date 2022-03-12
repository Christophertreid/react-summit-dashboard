import * as s from './styles'
import { Link, Route, Routes } from 'react-router-dom'
import{DashboardPanel, ProductPanel} from '../../../pages/dashboard/panels'
const Panel = () => {
  return (
  <s.Panel>
    <Routes>
      <Route path="dashboard" element={<DashboardPanel/>}/>
      <Route path="products" element={<ProductPanel/>}/>
    </Routes>
  </s.Panel>

  );
}
 
export default Panel;