import { useState } from 'react';
import Button2 from '../Components/Buttons/Button2';
import Breadcrumbs3 from '../Components/Breadcrumbs/Breadcrumbs3';
function Login(){
  const [crumbs]=useState(['Sign Up','Login']);
  const selected=crumb=>{
      console.log(crumb);
  }
  const [getForm, setForm] = useState({
    email: '',
    password: ''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }
  const [path]=useState(['/','/login']);
    return (<div>
        <Breadcrumbs3 path={path} crumbs={crumbs} selected={selected}/>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <form className="classform">     
                    <div className="head1"><h3>Login</h3></div>
                    <div className="head2">Please login to make appointment.</div><br/>
                    <div className="form-group">
                      <label>User name &nbsp;<input type="text" className="textarea" id="username" placeholder="Username" onChange={onChangeHandler} value={getForm.email} name="email" /></label>
                      
                    </div>
                    <div className="form-group">
                      <label>Password &nbsp;&nbsp;&nbsp;<input type="password" className="textarea" id="password" placeholder="Password" onChange={onChangeHandler} value={getForm.password} name="password"/></label>
                      
                    </div>
                    <Button2/>
                </form>
            </div>
            </div>
            <div className="col-4"></div>
        </div>
        </div>
    );
}
export default Login;