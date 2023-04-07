import Logo from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';
import HeaderIcons from './HeaderIcons';
function Header() {
    return (
        <div >
            <div className="ds_tabs js-initialised" data-module="ds-tabs">
                <nav className="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
                    <ul className="ds_tabs__list" id="tablist" role="tablist">
                        <li className="ds_tabs__tab ds_current" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/" role="tab" aria-selected="true"><img className="logo" src={Logo} alt="logo" /></Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/dashboard" role="tab" aria-selected="false">Dashboard</Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/shipments" role="tab" aria-selected="false">Shipments</Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/invoices" role="tab" aria-selected="false">Invoices</Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/quotations" role="tab" aria-selected="false">Quotations</Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/shipper" role="tab" aria-selected="false">Shipper/Consignee</Link>
                        </li>
                        <li className="ds_tabs__tab" role="presentation">
                            <Link className="ds_tabs__tab-link" to="/reports" role="tab" aria-selected="false">Reports</Link>
                        </li>
                        <HeaderIcons/>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;