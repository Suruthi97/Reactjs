import './Login.css';
import Libraryimg from '../../Assests/Library_image1.png';
import { emailValidation, passwordValidation } from '../Validation';
import {Component} from 'react';
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      getForm: {
        email: '',
        password: ''
      },
      getValidation: {
        email: '',
        password: ''
      }
    }
  }
    onChangeHandler = (event) => {
    this.setState({
      getForm:{
        ...this.state.getForm,
        [event.target.name]: event.target.value
      } 
    })
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      getValidation:{
        email: !emailValidation(this.state.getForm.email) ? "Invalid data" : "",
        password: !passwordValidation(this.state.getForm.password) ? "Invalid data" : ""
      }
    })
    if (emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password)) {
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if (email === this.state.getForm.email && password === this.state.getForm.password) {
        alert("Login Success");
        document.location.href="/adminSearch";
      }
      else {
        if (email !== this.state.getForm.email && password === this.state.getForm.password) {
          this.setState({
            setValidation:({
              email: "Invalid data",
              password: ""
            })
          })
        }
        else if (email === this.state.getForm.email && password !== this.state.getForm.password) {
          this.setState({
            setValidation:({
              email: "",
              password: "Invalid data"
            })
          })
        }
        else if (email !== this.state.getForm.email && password !== this.state.getForm.password) {
          this.setState({
            setValidation:({
              email: "Invalid data",
              password: "Invalid data"
            })
          })
        }
      }
    }
  }
  render(){
    return (
      <div className="classlogin">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <form className="classform">
                <div className="head1">
                  <table><thead>
                    <tr>
                      <td><img src={Libraryimg} className="image"></img></td>
                      <td className="tab"><h3>Library Management System</h3></td></tr>
                  </thead>
                  </table></div><br />
                <div className="form-group">
                  <label>User name &nbsp;<i className="fa fa-user" aria-hidden="true"></i><input type="text" id="username" onChange={this.onChangeHandler} value={this.state.getForm.email} name="email" /></label>
                  {this.state.getValidation.email && <div className="alert alert-danger" role="alert">
                    {this.state.getValidation.email}
                  </div>}
                </div>
                <div className="form-group">
                  <label>Password &nbsp;&nbsp;&nbsp;<i className="fa fa-key" aria-hidden="true"></i><input type="password" id="password" onChange={this.onChangeHandler} value={this.state.getForm.password} name="password" /></label>
                  {this.state.getValidation.password && <div className="alert alert-danger" role="alert">
                    {this.state.getValidation.password}
                  </div>}
                </div>
                <button type="submit" onClick={this.onSubmitHandler} className="btn btn-warning">Login</button>
              </form>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
// function Login() {
//   const navigate = useNavigate();
//   const [getForm, setForm] = useState({
//     email: '',
//     password: ''
//   });
//   const [getValidation, setValidation] = useState({
//     email: '',
//     password: ''
//   });
//   const onChangeHandler = (event) => {
//     setForm({
//       ...getForm, [event.target.name]: event.target.value
//     })
//   }
//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     setValidation({
//       ...getValidation, email: !emailValidation(getForm.email) ? "Invalid data" : "",
//       password: !passwordValidation(getForm.password) ? "Invalid data" : ""
//     });
//     if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
//       let email = sessionStorage.getItem('email');
//       let password = sessionStorage.getItem('password');
//       if (email === getForm.email && password === getForm.password) {
//         alert("Login Success");
//         navigate('/adminSearch');
//       }
//       else {
//         if (email !== getForm.email && password === getForm.password) {
//           setValidation({
//             email: "Invalid data",
//             password: ""
//           });
//         }
//         else if (email === getForm.email && password !== getForm.password) {
//           setValidation({
//             email: "",
//             password: "Invalid data"
//           });
//         }
//         else if (email !== getForm.email && password !== getForm.password) {
//           setValidation({
//             email: "Invalid data",
//             password: "Invalid data"
//           });
//         }
//       }
//     }
//   }
//   return (
//     <div className="classlogin">
//       <div className="container">
//         <div className="row">
//           <div className="col-4"></div>
//           <div className="col-4">
//             <form className="classform">
//               <div className="head1">
//                 <table><thead>
//                   <tr>
//                     <td><img src={Libraryimg} className="image"></img></td>
//                     <td className="tab"><h3>Library Management System</h3></td></tr>
//                 </thead>
//                 </table></div><br />
//               <div className="form-group">
//                 <label>User name &nbsp;<i className="fa fa-user" aria-hidden="true"></i><input type="text" id="username" onChange={onChangeHandler} value={getForm.email} name="email" /></label>
//                 {getValidation.email && <div className="alert alert-danger" role="alert">
//                   {getValidation.email}
//                 </div>}
//               </div>
//               <div className="form-group">
//                 <label>Password &nbsp;&nbsp;&nbsp;<i className="fa fa-key" aria-hidden="true"></i><input type="password" id="password" onChange={onChangeHandler} value={getForm.password} name="password" /></label>
//                 {getValidation.password && <div className="alert alert-danger" role="alert">
//                   {getValidation.password}
//                 </div>}
//               </div>
//               <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Login</button>
//             </form>
//           </div>
//         </div>
//         <div className="col-4"></div>
//       </div>
//     </div>
//   );
// }
export default Login;