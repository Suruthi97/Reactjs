import React from "react";
import jwt_decode from "jwt-decode";
import "../../App.scss";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../config/authConfig";
import HeaderComponent from "../Header/header";
import RouterComponent from "../Router/router";
import serviceCall from "../../store/serviceCall";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Constant from "../../store/CONSTANTS/constant.english.json";

function LoginContainer() {
  const { instance } = useMsal();

  return (
    <React.Fragment>
      <HeaderComponent title={Constant.app_title} isToken={false}/>
      <CssBaseline />
      <Box className="container">
        <Card>
          <CardContent className="cardContainer">
            <Box
              className="formContainer"
              component="div"
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Typography variant="h4" component="div">
                Sign In
              </Typography>
            </Box>
            <Box
              className="formContainer"
              component="div"
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Typography variant="p" component="div">
                You'll need your User ID each time you log on, so make sure you
                keep it handy.
              </Typography>
            </Box>
            <Box
              className="formContainer"
              component="div"
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Button
                variant="contained"
                className="formItemLeft"
                onClick={() => instance.loginRedirect(loginRequest)}
              >
                Sign In with B2C
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}



function ProtectedComponent() {
  const { instance, accounts } = useMsal();
  const [isCaveatCheckIn, setIsCaveatCheckIn] = React.useState(false);

  const handleLogout = React.useCallback(() => {
    instance.logoutRedirect({ postLogoutRedirectUri: "/caveats" });
    localStorage.clear();
  }, [instance])

  React.useEffect(() => {
    const accessTokenRequest = {
      account: accounts[0],
    };

    instance
      .acquireTokenSilent(accessTokenRequest)
      .then(function (accessTokenResponse) {
        // Acquire token silent success
        let token = accessTokenResponse.idToken;
        localStorage.setItem("token", token);
        let tokenParsed = jwt_decode(token);
        localStorage.setItem("token-data", JSON.stringify(tokenParsed));

        serviceCall
          .getApi(process.env.REACT_APP_CAVEAT_CHECK_URL)
          .then((result) => {
            if (!result || !result.status || result.status !== 200) {
              handleLogout();
            } else {
              setIsCaveatCheckIn(true);
            }
          })
          .catch((e) => {
            console.log(e);
            handleLogout();
          });
      })
      .catch(function (error) {
        //Acquire token silent failure
        console.log(error);

      });
  }, [handleLogout, accounts, instance]);
  return (
    <div>
      {isCaveatCheckIn ? 
        <React.Fragment>
          <HeaderComponent title={Constant.app_title}  isToken={true} handleLogout={handleLogout}/>
          <CssBaseline />
          <RouterComponent />
        </React.Fragment>
      : null}
    </div>
  );
}

function HomeContainer() {
  return (
    <div>
      <div>
        <UnauthenticatedTemplate>
          <LoginContainer />
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <ProtectedComponent />
        </AuthenticatedTemplate>
      </div>
    </div>
  );
}

export default HomeContainer;
