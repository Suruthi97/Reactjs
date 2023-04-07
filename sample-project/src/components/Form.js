import React from "react";
import FormControl from '@mui/material/FormControl';
import '../App.scss';

function FormContainer(props) {
    return (
        <FormControl className='formItemLeft'>
            {props.children}
        </FormControl>
        
    );
}
export default FormContainer;