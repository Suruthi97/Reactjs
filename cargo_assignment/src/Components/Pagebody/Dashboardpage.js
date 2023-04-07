import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Map from '../../Assets/Map.jpg';
function Dashboardpage() {
    return (
        <div className="page">
            <nav aria-label="Category navigation">
                <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
                    <li className="ds_card  ds_card--has-hover">
                        <div className="ds_category-item  ds_category-item--card1">
                                <span className="head">Mr. Danny Rand</span>
                                <span>
                                    <Button className="button1" variant="contained" startIcon={<Add />}>
                                        Get Quote
                                    </Button>
                                </span>Rand Enterprises<hr />
                                Monthly Highlights<br />
                                0<br />
                                Due Invoices<br />
                                <Link to="">View All</Link><br />
                                0 shipments are waiting for approval
                        </div>
                    </li>

                    <li className="ds_card  ds_card--has-hover">
                        <article className="ds_category-item  ds_category-item--card">
                        <img className="map" src={Map} alt="map" />
                        </article>
                    </li>

                    <li className="ds_card  ds_card--has-hover">
                        <article className="ds_category-item  ds_category-item--card">
                            <div className="title">
                                Action Required
                            </div>
                            <p className="para">
                                You're All Caught Up!
                            </p>
                        </article>
                    </li>
                    <li className="ds_card  ds_card--has-hover">
                        <article className="ds_category-item  ds_category-item--card">
                            <div className="title">
                                Invoice
                            </div><hr className="line"/>
                        </article>
                    </li>
                    <li className="ds_card  ds_card--has-hover">
                        <article className="ds_category-item  ds_category-item--card">
                            <div className="title">
                                Latest Shipment
                            </div><hr className="line1"/>
                        </article>
                    </li>
                    <li className="ds_card  ds_card--has-hover">
                        <article className="ds_category-item  ds_category-item--card">
                            <div className="title">
                                Quotation
                            </div><hr className="line"/>
                        </article>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboardpage;