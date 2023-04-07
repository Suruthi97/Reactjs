import './../App.scss';

function Checkbox(props){
    return(
        <div className="ds_field-group" style={{columnCount:"2"}}> 
            {
                props.obj.map((obj,index)=>{
                    return(
                        <div>
                            <input key={index} id={obj.name} type="checkbox" name={obj.name} value={obj.name}/>
                            <label key={index} className="checkbox-shipment">{obj.name}</label>
                        </div>  
                    )
                })
                }
            
        </div>
    )
}

export default Checkbox;