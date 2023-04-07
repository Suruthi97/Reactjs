import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import React from "react";
import '../App.scss';

function BaseContainer(props) {
    return (
        <React.Fragment>
        <CssBaseline />
        <Box className={`container ${props.className}`}>
              {props.children}
        </Box>
      </React.Fragment>
    );
}
export default BaseContainer;