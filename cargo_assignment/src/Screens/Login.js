import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { emailValidation, passwordValidation } from './Validation';
import { useState } from 'react';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
import { formInitialState } from './initialState';

const theme = createTheme();

function Login() {
  const navigate = useNavigate();
  const [getForm, setForm] = useState(
    formInitialState.loginForm
  );
  const [getValidation, setValidation] = useState({
    email: '',
    password: ''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }
  const signinHandler = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, email: !emailValidation(getForm.email) ? "Please provide proper email ID" : "",
      password: !passwordValidation(getForm.password) ? "Password must be alphanumeric and contain atleast one special character" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
      alert("Login success");
      navigate('/dashboard');
    }
    // else{
    //     alert("Invalid data");
    // }
  console.log(getForm);
  }
  return (
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={signinHandler} noValidate sx={{ mt: 1 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button  className="login" onClick={signinHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >               
               Sign In  
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpw" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
export default Login;

