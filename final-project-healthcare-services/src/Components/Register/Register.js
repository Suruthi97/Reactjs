import './Register.css';
import { emailValidation, passwordValidation, nameValidation } from '../Validation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Register() {
    const navigate = useNavigate();
    const [getForm, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [getValidation, setValidation] = useState({
        firstName: '',
        lastName: '',
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
            ...getValidation, firstName: !nameValidation(getForm.firstName) ? "Please provide proper First Name" : "", lastName: !nameValidation(getForm.lastName) ? "Please provide proper Last Name" : "", email: !emailValidation(getForm.email) ? "Please provide proper email ID" : "",
            password: !passwordValidation(getForm.password) ? "Invalid password" : ""
        });
        if (nameValidation(getForm.firstName) && nameValidation(getForm.lastName) && emailValidation(getForm.email) && passwordValidation(getForm.password)) {
            alert("Successfully registered");
            sessionStorage.setItem("email", getForm.email);
            sessionStorage.setItem("password", getForm.password);
            navigate('/login');
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-4"><br />
                        <div><h1 className="head">Sign Up</h1></div>
                        <form>
                            <div className="form-group">
                                <label><h6>First Name</h6></label>
                                <input type="text" className="form-control" onChange={onChangeHandler} value={getForm.firstName} id="firstName" name="firstName" placeholder="First name" />
                                {getValidation.firstname && <div className="alert alert-danger" role="alert">
                                    {getValidation.firstname}
                                </div>}
                            </div>
                            <div className="form-group">
                                <label><h6>Last Name</h6></label>
                                <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
                                {getValidation.lastname && <div className="alert alert-danger" role="alert">
                                    {getValidation.lastname}
                                </div>}
                            </div>

                            <div className="form-group">
                                <label><h6>Email address</h6></label>
                                <input type="email" className="form-control" onChange={onChangeHandler} value={getForm.email} id="email" name="email" placeholder="Enter email" />
                                {getValidation.email && <div className="alert alert-danger" role="alert">
                                    {getValidation.email}
                                </div>}
                            </div>
                            <div className="form-group">
                                <label><h6>Password</h6></label>
                                <input type="password" className="form-control" onChange={onChangeHandler} value={getForm.password} id="password" name="password" placeholder="Enter Password" />
                                {getValidation.password && <div className="alert alert-danger" role="alert">
                                    {getValidation.password}
                                </div>}
                            </div>
                            <button type="submit" className="btn btn-success" onClick={onSubmitHandler}>Sign Up</button>
                        </form>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;