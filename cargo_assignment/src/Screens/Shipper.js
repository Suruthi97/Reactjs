import Notification from '../Components/Header/Notification';
import Shipperpage from '../Components/Pagebody/Shipper/Shipperpage';
import Header from '../Components/Header/Header';
function Shipper() {
    return (
        <div>            
            <Header/>
            <Notification name="Shipper"/>
            <Shipperpage/>
        </div>
    );
}

export default Shipper;