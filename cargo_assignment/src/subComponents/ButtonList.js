import './../App.scss';

function ButtonList(props){
    return(
        <div >
            {
                props.obj.map((obj)=>{
                    return(
                        <button className={props.class}>{obj.name}</button>
                    )
                }
                )
            }
        </div>
    )
}

export default ButtonList;