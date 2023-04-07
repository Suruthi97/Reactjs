import React from "react";
import Box from '@mui/material/Box';
import '../App.scss';

function BoxContainer(props) {
    return (
        <Box className={`formContainer ${props.className}`}
            component="div"
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
export default BoxContainer;