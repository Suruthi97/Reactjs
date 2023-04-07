import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from './Form';
import '../App.scss';

function RadioGroupContainer({ value, label, id, name, options,  onChange, defaultValue }) {
    return (
        <FormControl>
            <FormLabel id={id}>{name}</FormLabel>
            <RadioGroup row
                aria-labelledby={label}
                defaultValue={defaultValue}
                onChange={onChange} 
                name={name}
                value={value}
                >
                {options.map((option, index) => (
                    <FormControlLabel key={index} value={option.name} control={<Radio />}>{option.name}</FormControlLabel>
                ))}
            </RadioGroup>                                  
        </FormControl>
    );
}
export default RadioGroupContainer;
