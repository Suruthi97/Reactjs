import React from "react";
import Box from '@mui/material/Box';
import '../App.scss';

function BoxFormContainer(props) {
    return (
        <Box className={`formContainer ${props.className}`}
            component="form"
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                },
            }}
            >
        {props.children}
    </Box> 
    );
}
export default BoxFormContainer;