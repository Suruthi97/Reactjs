import * as React from 'react';
import {Link} from 'react-router-dom';
function HeaderIcons(){
    return( 
        <div className="ds_tabs js-initialised" data-module="ds-tabs">
        <nav className="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
            <ul className="ds_tabs__list" id="tablist" role="tablist">
                <li className="ds_tabs__tab1" role="presentation">
                    <Link className="ds_tabs__tab-link" to="#tab7" role="tab" aria-controls="tab3" aria-selected="false" tabIndex="-1" data-navigation="tab-link-1-7"><i className="fas fa-search" aria-hidden="true"></i></Link>
                </li>
                <li className="ds_tabs__tab2" role="presentation">
                    <Link className="ds_tabs__tab-link" to="#tab7" role="tab" aria-controls="tab3" aria-selected="false" tabIndex="-1" data-navigation="tab-link-1-7"><i className="fa fa-bell" aria-hidden="true"></i></Link>
                </li>
                <li className="ds_tabs__tab2" role="presentation">
                    <Link className="ds_tabs__tab-link" to="#tab7" role="tab" aria-controls="tab3" aria-selected="false" tabIndex="-1" data-navigation="tab-link-1-7"><i className="fa fa-user-circle" aria-hidden="true"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}
export default HeaderIcons; 