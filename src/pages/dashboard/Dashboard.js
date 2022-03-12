import * as s from './styles'
import Appbar from '../../layouts/Dashboard/Appbar/Appbar'
import Sidebar from '../../layouts/Dashboard/Sidebar/Sidebar'
import Panel from '../../layouts/Dashboard/Panel/Panel'

const Dashboard = (props) => {
  return ( 
    <s.Background>
      <Appbar />
      <Sidebar />
      <Panel>
        
      </Panel>
    </s.Background>
  );
}
 
export default Dashboard;