import React,{ useState } from 'react';
import Button1 from '../Components/Buttons/Button1';
import Breadcrumbs3 from '../Components/Breadcrumbs/Breadcrumbs3';
function Register() {
    const [crumbs]=useState(['Sign Up']);
    const selected=crumb=>{
        console.log(crumb);
    }
    const [getForm, setForm] = useState({
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
    const [path]=useState(['/']);
    return (<div>
        <Breadcrumbs3 path={path} crumbs={crumbs} selected={selected}/>
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
                                
                            </div>
                            <div className="form-group">
                                <label><h6>Last Name</h6></label>
                                <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
                                
                            </div>

                            <div className="form-group">
                                <label><h6>Email address</h6></label>
                                <input type="email" className="form-control" onChange={onChangeHandler} value={getForm.email} id="email" name="email" placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group">
                                <label><h6>Password</h6></label>
                                <input type="password" className="form-control" onChange={onChangeHandler} value={getForm.password} id="password" name="password" placeholder="Enter Password" />
                                
                            </div>
                            <Button1/>
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