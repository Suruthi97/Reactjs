import Notification from '../Components/Header/Notification';
import Quotationspage from '../Components/Pagebody/Quotations/Quotationspage';
import Header from '../Components/Header/Header';
function Quotations() {
    return (
        <div>            
            <Header/>
            <Notification name="Quotation"/>
            <Quotationspage/>
        </div>
    );
}

export default Quotations;