import './../App.scss';

function Accordion(){
    return(
        <div className="ds_accordion" data-module="ds-accordion">
            <button data-accordion="accordion-open-all" type="button" className="ds_link  ds_accordion__open-all  js-open-all">Open all <span className="visually-hidden">sections</span></button>

            <div className="ds_accordion-item">
                <input type="checkbox" className="visually-hidden  ds_accordion-item__control" id="panel-1" aria-labelledby="panel-1-heading" />
                <div className="ds_accordion-item__header">
                    <h3 id="panel-1-heading" className="ds_accordion-item__title">
                        What are you shipping?
                    </h3>
                    <span className="ds_accordion-item__indicator"></span>
                    <label className="ds_accordion-item__label" htmlFor="panel-1"><span className="visually-hidden">Show this section</span></label>
                </div>
                <div className="ds_accordion-item__body">
                    <select className="drop-select"><option>FCL-FullContainer Load</option></select>
                    <select className="drop-select"><option>Movement Type</option></select>
                    <select className="drop-select"><option>Shipment Type</option></select>
                    <select className="drop-select"><option>Incoterms</option></select>
                    <input type="text" placeholder="Cargo Description" className="ship-input"/>
                    <select className="drop-select-weight"><option>Container Type</option></select>
                    <input type="text" placeholder="1" className="ship-input-small"/>
                    <select className="drop-select-weight"><option>Weight</option></select>
                    <input type="text" placeholder="Weight" className="ship-input"/>
                    <input type="checkbox" />
                    <label className="checkbox-shipment">Is Overweight</label>
                    <button style={{color:"red", border:"none",fontSize:"small",backgroundColor:"lightgrey"}}>x</button>
                    <input type="text" placeholder="Cargo Description" className="ship-input"/>
                    <select className="drop-select-weight"><option>Container Type</option></select>
                    <input type="text" placeholder="1" className="ship-input-small"/>
                    <select className="drop-select-weight"><option>Weight</option></select>
                    <input type="text" placeholder="Weight" className="ship-input"/>
                    <input type="checkbox" />
                    <label className="checkbox-shipment">Is Overweight</label>
                    <button style={{color:"red", border:"none",fontSize:"small",backgroundColor:"lightgrey"}}>x</button>
                </div>
            </div>

            <div className="ds_accordion-item">
                <input type="checkbox" className="visually-hidden  ds_accordion-item__control" id="panel-2" aria-labelledby="panel-2-heading" />
                <div className="ds_accordion-item__header">
                    <h3 id="panel-2-heading" className="ds_accordion-item__title">
                        Where are you shipping from?
                    </h3>
                    <span className="ds_accordion-item__indicator"></span>
                    <label className="ds_accordion-item__label" htmlFor="panel-2"><span className="visually-hidden">Show this section</span></label>
                </div>
                <div className="ds_accordion-item__body">
                    <p>If you're looking for a job, there are several organisations that can help you</p>
                </div>
            </div>

            <div className="ds_accordion-item">
                <input type="checkbox" className="visually-hidden  ds_accordion-item__control" id="panel-3" aria-labelledby="panel-3-heading" />
                <div className="ds_accordion-item__header">
                    <h3 id="panel-3-heading" className="ds_accordion-item__title">
                        Where are you shipping to?
                    </h3>
                    <span className="ds_accordion-item__indicator"></span>
                    <label className="ds_accordion-item__label" or="panel-3"><span className="visually-hidden">Show this section</span></label>
                </div>
                <div className="ds_accordion-item__body">
                    <p>If you need there's support specifically for veterans.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion;