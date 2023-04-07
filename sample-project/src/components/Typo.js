import React from "react";
import Typography from '@mui/material/Typography';
import '../App.scss';

function TypoContainer(props) {
    return (
        <Typography  variant={props.variant} component={props.component} className={props.className}>
            {props.children}
        </Typography>
    );
}
export default TypoContainer;