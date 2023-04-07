import './../App.scss';
import Notification from '../Components/Header/Notification';
import Accordion from './../subComponents/Accordion';
import Header from '../Components/Header/Header';

function NewQuotation() {
    return (<div className="page">
        <Header />
        <Notification name="Quotation | New Quotation" />
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <div className="row justify-content-center">
                        <label className="dg-med-label">
                            <font style={{ fontSize: "20px" }}>SHIP WITH EASE</font><br />
                            Request a quote, with few clicks
                        </label>
                    </div>
                    <div className="row justify-content-center new-quote">
                        <div className="container-fluid">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NewQuotation;