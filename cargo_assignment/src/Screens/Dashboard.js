import Notification from '../Components/Header/Notification';
import Dashboardpage from '../Components/Pagebody/Dashboardpage';
import Header from '../Components/Header/Header';
function Dashboard() {
    return (
        <div className="page"> 
        <Header/>
            <Notification name="Dashboard"/>
            <Dashboardpage/>
        </div>
    );
}

export default Dashboard;