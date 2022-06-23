import './Login.css';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
import { emailValidation, passwordValidation } from '../Validation';
import {useDispatch} from 'react-redux';
import Users from '../../services/users';
function Login(){
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
        navigate('/home');
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
    return(
        <div><br/>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <form className="classform">     
                    <div className="head1"><h3>Login</h3></div>
                    <div className="head2">Please login to make appointment.</div><br/>
                    <div className="form-group">
                      <label>User name &nbsp;<input type="text" className="textarea" id="username" placeholder="Username" onChange={onChangeHandler} value={getForm.email} name="email" /></label>
                      {getValidation.email && <div className="alert alert-danger" role="alert">
                  {getValidation.email}
                </div>}
                    </div>
                    <div className="form-group">
                      <label>Password &nbsp;&nbsp;&nbsp;<input type="password" className="textarea" id="password" placeholder="Password" onChange={onChangeHandler} value={getForm.password} name="password"/></label>
                      {getValidation.password && <div className="alert alert-danger" role="alert">
                  {getValidation.password}
                </div>}
                    </div>
                
                    <button type="submit" onClick={onSubmitHandler} className="btn btn-success2">Login</button>
                </form>
            </div>
            </div>
            <div className="col-4"></div>
        </div>
        </div>
    );
}
export default Login;