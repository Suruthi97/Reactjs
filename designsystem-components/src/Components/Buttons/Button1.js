// import {Link} from 'react-router-dom';
// function Home(){
//     return(<div className="page">
//         <nav aria-label="Breadcrumb">
//             <ol className="ds_breadcrumbs">
//                 <li className="ds_breadcrumbs__item">
//                     <Link className="ds_breadcrumbs__link" to="#">
//                         Home
//                     </Link>
//                 </li>
//             </ol>
//         </nav>
//         <Link to="/datepicker" className="ds_button  ds_button--has-icon">
//                 Next
//                 <svg class="ds_icon" aria-hidden="true" role="img"><use href="/Assests/images/icons/icons.stack.svg#chevron_right"></use></svg>
//             </Link>
//     </div>);
// }
// export default Home;
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import ArrowRight  from '@mui/icons-material/ArrowRight';
// import ArrowLeft  from '@mui/icons-material/ArrowLeft';

function Button1() {
  const navigate = useNavigate();
  const onSubmit = (event) => {
      event.preventDefault();
          navigate('/login');
  }
  return (<div>
    <Button className="button-group" variant="outlined" onClick={onSubmit}>Sign Up</Button>
  </div>
  );
}
export default Button1;