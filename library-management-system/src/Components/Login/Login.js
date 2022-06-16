import './Login.css';
import Libraryimg from '../../Assests/Library_image1.png';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
import { emailValidation, passwordValidation } from '../Validation';
import {useDispatch} from 'react-redux';
import Users from '../../services/users';
function Login() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [getForm, setForm] = useState({
    email: '',
    password: ''
  });
  const [getValidation, setValidation] = useState({
    email: '',
    password: ''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, email: !emailValidation(getForm.email) ? "Invalid data" : "",
      password: !passwordValidation(getForm.password) ? "Invalid data" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if (email === getForm.email && password === getForm.password) {
        alert("Login Success");
        Users.loadUsers(dispatch,email,password);
        navigate('/Search');
      }
      else {
        if (email !== getForm.email && password === getForm.password) {
          setValidation({
            email: "Invalid data",
            password: ""
          });
        }
        else if (email === getForm.email && password !== getForm.password) {
          setValidation({
            email: "",
            password: "Invalid data"
          });
        }
        else if (email !== getForm.email && password !== getForm.password) {
          setValidation({
            email: "Invalid data",
            password: "Invalid data"
          });
        }
      }
    }
  }
  const onSubmitHandler1 = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, email: !emailValidation(getForm.email) ? "Invalid data" : "",
      password: !passwordValidation(getForm.password) ? "Invalid data" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if (email === getForm.email && password === getForm.password) {
        alert("Login Success");
        Users.loadUsers(dispatch,email,password);
        navigate('/adminSearch');
      }
      else {
        if (email !== getForm.email && password === getForm.password) {
          setValidation({
            email: "Invalid data",
            password: ""
          });
        }
        else if (email === getForm.email && password !== getForm.password) {
          setValidation({
            email: "",
            password: "Invalid data"
          });
        }
        else if (email !== getForm.email && password !== getForm.password) {
          setValidation({
            email: "Invalid data",
            password: "Invalid data"
          });
        }
      }
    }
  }
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
                <label>User name &nbsp;<i className="fa fa-user" aria-hidden="true"></i><input type="text" id="username" onChange={onChangeHandler} value={getForm.email} name="email" /></label>
                {getValidation.email && <div className="alert alert-danger" role="alert">
                  {getValidation.email}
                </div>}
              </div>
              <div className="form-group">
                <label>Password &nbsp;&nbsp;&nbsp;<i className="fa fa-key" aria-hidden="true"></i><input type="password" id="password" onChange={onChangeHandler} value={getForm.password} name="password" /></label>
                {getValidation.password && <div className="alert alert-danger" role="alert">
                  {getValidation.password}
                </div>}
              </div>
              <table><thead>
                  <tr>
                    <td><button type="submit" onClick={onSubmitHandler} className="btn btn-warning">User Login</button></td>
                    <td><button type="submit" onClick={onSubmitHandler1} className="btn btn-warning">Admin Login</button></td>
                    <td><button type="submit" className="btn btn-warning"><Link to='/' className="but">Sign Up</Link></button></td></tr>
                </thead>
                </table><br />
              <span>
              </span>
            </form>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
export default Login;