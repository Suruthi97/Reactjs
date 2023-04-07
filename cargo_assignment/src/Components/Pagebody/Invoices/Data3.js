import { Button } from '@mui/material';
function Data3() {
    return (<div>
        <nav aria-label="Category navigation">
            <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
                <li className="ds_card1  ds_card--has-hover">
                    <div className="ds_category-item  ds_category-item--card">
                        Payment Status<br />
                        <div>
                            <span><Button className="button" variant="contained">Paid</Button></span>&nbsp;
                            <span><Button className="button" variant="contained">Partially Paid</Button></span>&nbsp;
                            <span><Button className="button" variant="contained">Due</Button></span>&nbsp;
                        </div><hr className="line2" />
                    </div>
                </li>
            </ul>
        </nav>
    </div>);
}
export default Data3;