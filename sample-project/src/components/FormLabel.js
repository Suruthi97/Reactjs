import React from "react";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function FormLabelContainer(props) {
    return (
    <FormControl>
        <FormLabel> {props.children}</FormLabel>       
    </FormControl> 
    );
}
export default FormLabelContainer;