import Notification from '../Components/Header/Notification';
import Shipmentpage from '../Components/Pagebody/Shipment/Shipmentpage';
import Header from '../Components/Header/Header';
function Shipments() {
    return (
        <div className="page">    
        <Header/>        
            <Notification name="Shipments" />
            <Shipmentpage/>
        </div>
    );
}

export default Shipments;