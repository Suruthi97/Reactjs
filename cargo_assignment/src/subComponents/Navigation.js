import '../App.scss';
import {Link} from "react-router-dom";

function Navigation(props){

    // function onClickHandler(event){
    //     const activeLink=event.target.name;
    // }
    return(
        <nav className="ds_site-navigation">
            <ul className="ds_site-navigation__list">
                {
                    props.list.map((obj,index)=>{
                        return(
                            <li className="ds_site-navigation__item" key={index}>
                            <Link to={obj.href} className="ds_site-navigation__link" name={obj.item}>{obj.item}</Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </nav>
    )
}

export default Navigation;