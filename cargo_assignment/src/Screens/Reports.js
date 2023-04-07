import { useState } from 'react';
import '../App.scss';
import Notification from '../Components/Header/Notification';
import graph1 from './../Assets/graph1.png';
import graph2 from './../Assets/graph2.png';
import Header from '../Components/Header/Header';
function Reports(){
    const [checkbox, setCheckbox] = useState(false);
    const [checkboxone, setCheckboxone] = useState(false);
    const selectView=(e)=>{
        setCheckbox(!checkbox);
        return checkbox;
    }

    const selectViewone=(e)=>{
        setCheckboxone(!checkboxone);
        return checkboxone;
    }

    return(
        <div className="page">
        <Header/>
            <Notification name="Reports"/>
        <div className="container-fluid">
            <div className="row reports-label">
                <label className="dg-medium-label">Webapp Reports Dashboard</label>
            </div>
            <div className="row">
                <div className="col reports-total">
                    <label>Total</label>
                    <div>
                        <select className="drop-report"><option>Monthly</option></select>
                        <select className="drop-report"><option>Linear</option></select>
                        <button style={{border:"0.5px solid blue",fontSize:"small",marginRight:"5px"}}>Download CSV</button>
                        <input type="checkbox" onClick={selectView} />
                        <label className="checkbox-shipment" style={{marginLeft:"3px"}}>Table View</label>
                    </div>
                    <div className={checkbox?"":"visually-hidden"}>
                    <table className="ds_table">
                        <tr className="rep-table-header">
                            <th>Air Shipment</th>
                            <th>Sea Shipment</th>
                            <th>Land Shipment</th>
                            <th>Documentation Job</th>
                            <th>Clearance Job</th>
                        </tr>
                    </table>
                    </div>
                    <div className={checkbox?"visually-hidden":""}>
                    <img src={graph1} alt=""/>
                    </div>
                </div>
                <div className="col reports-total">
                    <label>Total</label>
                    <div>
                        <select className="drop-report"><option>Monthly</option></select>
                        <select className="drop-report"><option>Linear</option></select>
                        <button style={{border:"0.5px solid blue",fontSize:"small",marginRight:"5px"}}>Download CSV</button>
                        <input type="checkbox" onClick={selectViewone}/>
                        <label className="checkbox-shipment" style={{marginLeft:"3px"}}>Table View</label>
                    </div>
                    <div className={checkboxone?"":"visually-hidden"}>
                    <table className="ds_table">
                        <tr className="rep-table-header">
                            <th>Freight Spends</th>
                        </tr>
                    </table>
                    </div>
                    <div className={checkboxone?"visually-hidden":""}>
                    <img src={graph2} alt=""/>
                    </div>
                </div>
            </div>
            <div className="row reports-acc">
                <div className="col" style={{marginRight:"1px"}}>
                    <div className="row" style={{borderBottom:"1px solid lightgrey",paddingLeft:"2%"}}><font style={{fontSize:"medium"}}>Accounts</font></div>
                    <label className="dg-med-label">
                        <br/>Statement of Account<br/>
                        Aging Invoices                          
                    </label>
                </div>
                <div className="col">
                    <div className="row" style={{borderBottom:"1px solid lightgrey",paddingLeft:"2%"}}><font style={{fontSize:"medium"}}>Shipments</font></div>
                    <label className="dg-med-label">
                        <br/>Status Report<br/>
                        Cost per unit Report
                    </label>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Reports;