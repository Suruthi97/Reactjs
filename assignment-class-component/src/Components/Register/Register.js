import './Register.css';
import { Link } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../Validation';
import { Component } from 'react';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getForm: {
        firstName: '',
        lastName: '',
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
        email: !emailValidation(this.state.getForm.email) ? "Please provide proper email ID" : "",
        password: !passwordValidation(this.state.getForm.password) ? "Invalid password" : ""
      }
    })
    if (emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password)) {
      alert("Successfully registered");
      sessionStorage.setItem("email", this.state.getForm.email);
      sessionStorage.setItem("password", this.state.getForm.password);
      document.location.href="/login";
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand">
          <Link className="navbar-brand" to="#"><i className="fa fa-university" aria-hidden="true"></i></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">About Library</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Rules & Regulations</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Price Card</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4"><br />
              <div><h1 className="head">Sign Up</h1></div>
              <form>
                <div className="form-group">
                  <label><h6>First Name</h6></label>
                  <input type="text" onChange={this.onChangeHandler} value={this.state.getForm.firstName} className="form-control" id="firstName" name="firstName" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label><h6>Last Name</h6></label>
                  <input type="text" onChange={this.onChangeHandler} value={this.state.getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
                </div>

                <div className="form-group">
                  <label><h6>Email address</h6></label>
                  <input type="email" onChange={this.onChangeHandler} value={this.state.getForm.email} className="form-control" id="email" name="email" placeholder="Enter email" />
                  {this.state.getValidation.email && <div class="alert alert-danger" role="alert">
                    {this.state.getValidation.email}
                  </div>}
                </div>
                <div className="form-group">
                  <label><h6>Password</h6></label>
                  <input type="password" onChange={this.onChangeHandler} value={this.state.getForm.password} className="form-control" id="password" name="password" placeholder="Enter Password" />
                  {this.state.getValidation.password && <div class="alert alert-danger" role="alert">
                    {this.state.getValidation.password}
                  </div>}
                </div>
                <button type="submit" onClick={this.onSubmitHandler} className="btn btn-warning">Submit</button>
              </form>
            </div>
            <div className="col-4">
            </div>
          </div>
        </div></div>
    );
  }
}
// function Register() {
//   const navigate = useNavigate();
//   const [getForm, setForm] = useState({
//     firstName: '',
//     lastName: '',
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
//       ...getValidation, email: !emailValidation(getForm.email) ? "Please provide proper email ID" : "",
//       password: !passwordValidation(getForm.password) ? "Invalid password" : ""
//     });
//     if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
//       alert("Successfully registered");
//       sessionStorage.setItem("email", getForm.email);
//       sessionStorage.setItem("password", getForm.password);
//       navigate('/login');
//     }
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand">
//         <Link className="navbar-brand" to="#"><i className="fa fa-university" aria-hidden="true"></i></Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">About Library</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Rules & Regulations</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Price Card</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Login</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className="container">
//         <div className="row">
//           <div className="col-4">
//           </div>
//           <div className="col-4"><br />
//             <div><h1 className="head">Sign Up</h1></div>
//             <form>
//               <div className="form-group">
//                 <label><h6>First Name</h6></label>
//                 <input type="text" onChange={onChangeHandler} value={getForm.firstName} className="form-control" id="firstName" name="firstName" placeholder="First name" />
//               </div>
//               <div className="form-group">
//                 <label><h6>Last Name</h6></label>
//                 <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
//               </div>

//               <div className="form-group">
//                 <label><h6>Email address</h6></label>
//                 <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email" />
//                 {getValidation.email && <div class="alert alert-danger" role="alert">
//                   {getValidation.email}
//                 </div>}
//               </div>
//               <div className="form-group">
//                 <label><h6>Password</h6></label>
//                 <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Enter Password" />
//                 {getValidation.password && <div class="alert alert-danger" role="alert">
//                   {getValidation.password}
//                 </div>}
//               </div>
//               <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Submit</button>
//             </form>
//           </div>
//           <div className="col-4">
//           </div>
//         </div>
//       </div></div>
//   );
// }
export default Register;