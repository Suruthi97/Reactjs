// import Header from '../Components/Header/Header';
// import Notification from '../Components/Header/Notification';
// function Shipper() {
//     return (
//         <div>
//             <Header/>
//             <Notification name="Customer Party"/>
//         </div>
//     );
// }

// export default Shipper;

import '../../../App.scss';
import { Button } from '@mui/material';
import Filter from '../../TableData/Filter';
import Search from '../../TableData/Search';
import Stack from '@mui/material/Stack';
import Select from '../../TableData/Select';
function Shipperpage() {
    return (

        <div className="div">
            <div className="table1"><br />
                <table>
                    <tbody>
                        <tr>
                            <td style={{width:"450px"}}>
                                <Filter />
                            </td>
                            <td style={{paddingLeft:"687px"}}>
                                <Search name="Search Customer Party" className="search1" />
                            </td>
                            <td>
                                <div className="col text-center">
                                    <button className="new-quote-btn">Add Customer Party</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="party1">
                                <nav aria-label="Category navigation">
                                    <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
                                        <li className="ds_card1  ds_card--has-hover ds_card_move">
                                            <div className="ds_category-item  ds_category-item--card">
                                                Party Type<br />
                                                <div>
                                                    <Stack direction="row" spacing={1}>
                                                        <span><Button className="button" variant="contained">Shipper</Button></span>&nbsp;
                                                        <span><Button className="button" variant="contained">Consignee</Button></span>&nbsp;
                                                        <span><Button className="button" variant="contained">Delivery</Button></span>&nbsp;
                                                        <span><Button className="button" variant="contained">Manufacturer</Button></span>&nbsp;
                                                    </Stack>
                                                </div><hr className="line2" />
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </td>
                            <td>
                                <div className="row search-results-true">
                                    <label className="dg-med-label">
                                        <b>Rand Enterprises</b><br />
                                        E: danny@rand.com <br /><br /><br /><br /><br /><br />
                                        Mr. Danny Rand<br />
                                        danny@rand.com
                                    </label>
                                    <br/>
                                </div>
                                    <div className="select">
                                    <Select />
                                    </div>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Shipperpage;