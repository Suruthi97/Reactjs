import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { emailValidation, passwordValidation, firstNameValidation, lastNameValidation } from './Validation';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { formInitialState } from './initialState';
const theme = createTheme();
function Register() {
  const navigate = useNavigate();
  const [getForm, setForm] = useState(formInitialState.loginForm);
  const [getValidation, setValidation] = useState({
    email: '',
    password: '',
    firstName:'',
    lastName:''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }
  const registerHandle = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, email: !emailValidation(getForm.email) ? "Please provide proper email ID" : "",
      password: !passwordValidation(getForm.password) ? "Password must be alphanumeric and contain atleast one special character" : "",
      firstName: !firstNameValidation(getForm.firstName) ? "Invalid first name" : "",
      lastName: !lastNameValidation(getForm.lastName) ? "Invalid last name" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password) && firstNameValidation(getForm.firstName) && lastNameValidation(getForm.lastName)) {
      alert("Successfully registered");
      navigate('/');
    }
    // else{
    //     alert("Invalid data");
    // }
    console.log(getForm);
  }
  return (
    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-4">
    //       </div>
    //       <div className="col-4"><br />
    //         <div><h1 className="head">Sign Up</h1></div>
    //         <form>
    //           <div className="form-group">
    //             <label><h6>First Name</h6></label>
    //             <input type="text" onChange={onChangeHandler} value={getForm.firstName} className="form-control" id="firstName" name="firstName" placeholder="First name" />
    //           </div>
    //           <div className="form-group">
    //             <label><h6>Last Name</h6></label>
    //             <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
    //           </div>

    //           <div className="form-group">
    //             <label><h6>Email address</h6></label>
    //             <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email" />
    //             {getValidation.email && <div className="alert alert-danger" role="alert">
    //               {getValidation.email}
    //             </div>}
    //           </div>
    //           <div className="form-group">
    //             <label><h6>Password</h6></label>
    //             <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Enter Password" />
    //             {getValidation.password && <div className="alert alert-danger" role="alert">
    //               {getValidation.password}
    //             </div>}
    //           </div>
    //           <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Submit</button>
    //         </form>
    //       </div>
    //       <div className="col-4">
    //       </div>
    //     </div>
    //   </div></div>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={registerHandle} noValidate sx={{ mt: 1 }}>
          <TextField onChange={onChangeHandler}
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
            {getValidation.firstName && <div className="alert alert-primary" role="alert">
                  {getValidation.firstName}
                </div>}
            <TextField onChange={onChangeHandler}
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />
            {getValidation.lastName && <div className="alert alert-primary" role="alert">
                  {getValidation.lastName}
                </div>}
            <TextField onChange={onChangeHandler}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {getValidation.email && <div className="alert alert-primary" role="alert">
                  {getValidation.email}
                </div>}
            <TextField onChange={onChangeHandler}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {getValidation.password && <div className="alert alert-primary" role="alert">
                  {getValidation.password}
                </div>}
            <Button  className="login" onClick={registerHandle}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
               
               Register        
              
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
export default Register;