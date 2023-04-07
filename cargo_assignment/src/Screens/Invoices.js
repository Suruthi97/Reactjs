
import Notification from '../Components/Header/Notification';
import Invoicepage from '../Components/Pagebody/Invoices/Invoicepage';
import Header from '../Components/Header/Header';
function Invoices() {
    return (
        <div className="page">
            <Header/>
            <Notification name="Invoices" />
            <Invoicepage/>
        </div>
    );
}

export default Invoices;