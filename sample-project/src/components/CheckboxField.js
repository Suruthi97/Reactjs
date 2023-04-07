import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import '../App.scss';

function CheckboxContainer({ value, label, id, onChange }) {
    return (        
        <FormControl>
            <Checkbox label={label} id={id}
                checked={value} 
                onChange={onChange} 
                inputprops={{ 'aria-label': 'controlled' }}
                />
        </FormControl>
    );
}
export default CheckboxContainer;
