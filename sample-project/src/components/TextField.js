import React from "react";
import FormControl from './Form';
import TextField from '@mui/material/TextField';
import '../App.scss';

function TextContainer({ value, label, id, name, placeholder, type, onChange, variant, error }) {
    return (
        <FormControl>
            <TextField id={id} label={label} 
                name={name} type={type}
                onChange={onChange} 
                value={value} 
                error={error}
                helperText={placeholder}
                variant={variant} />
        </FormControl>
    );
}
export default TextContainer;
