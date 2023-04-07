// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// function Breadcrumbs3(props) {
//     const [getpath, setpath] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:3000/breadcrumb').then((response) => {
//             setpath(response.data);
//         }).catch((error) => {
//             console.log(error);
//         })
//     }, [])
//     return (<div className="page">
//         <nav aria-label="Breadcrumb">
//             <ol className="ds_breadcrumbs"  >
//                 {getpath.map((obj, index) => {
//                     return (
//                         <li className="ds_breadcrumbs__item" key={index} aria-current={obj.ariacurrent}>
//                             <Link className="ds_breadcrumbs__link" to={obj.path} >
//                                 {obj.name}
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ol>
//         </nav>
//     </div>);
// }
// export default Breadcrumbs3;

import { Link } from 'react-router-dom';
function Breadcrumbs3(props) {
    function isLast(index) {
        return index === props.crumbs.length - 1;
    }
    return (<div className="page">
        <nav aria-label="Breadcrumb">
            <ol className="ds_breadcrumbs"  >
                {props.crumbs.map((crumb, cindex) => {
                    const disabled = isLast(cindex) ? 'disabled' : '';
                    return (
                        <li key={cindex} className="ds_breadcrumbs__item align-items-center">
                            <Link to={props.path} className={ `ds_breadcrumbs__link ${ disabled }`} onClick={() => props.selected(crumb)}>
                                {crumb}
                            </Link>
                        </li>)
                })}
            </ol>
        </nav>
    </div>);
}
export default Breadcrumbs3;