import React from "react";
import Box from '@mui/material/Box';
import '../App.scss';

function BoxBlockContainer(props) {
    return (
        <Box className={`formContainer ${props.className}`}
            component="div"
            sx={{
                display: 'block',
                textAlign: 'right',
                '& > :not(style)': {
                  m: 1,
                },
              }}
            >
        {props.children}
    </Box> 
    );
}
export default BoxBlockContainer;