import { Button,Checkbox } from '@mui/material';
function Data2() {
    return (<div>
            <nav aria-label="Category navigation">
                <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
                    <li className="ds_card1  ds_card--has-hover">
                        <div className="ds_category-item  ds_category-item--card">
                            <div>
                                Shipment Type
                                <div>
                                    <span><Button className="button" variant="contained">Air</Button></span>&nbsp;
                                    <span><Button className="button" variant="contained">Sea</Button></span>&nbsp;
                                    <span><Button className="button" variant="contained">Land</Button></span>&nbsp;<hr/>
                                </div>
                            </div>
                            <div>
                                Shipment Active
                                <div>
                                    <span><Button className="button" variant="contained">Active</Button></span>&nbsp;
                                    <span><Button className="button" variant="contained">Completed</Button></span>&nbsp;<hr/>
                                </div>
                            </div>
                            <div>
                                Shipment Status
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Opened
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Confirmed
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Picked Up
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>In Transit
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Vessel Arrived
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Vessel Unloaded
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Arrived Inland
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Arrived Terminal
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Customs Examination
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Customs Cleared
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Released/Picked Up
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Delivered
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Completed
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Processing
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>At Destination
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Under Clearance
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <Checkbox size="smaller"/>Arrived
                                                </td>
                                                <td>
                                                <Checkbox size="smaller"/>Released/Picked Up
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
    </div>);
}
export default Data2;