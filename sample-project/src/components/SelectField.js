import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from './Form';
import '../App.scss';

function SelectContainer({ value, label, id, name, options,  onChange, defaultValue }) {
    return (
        <FormControl>
            <InputLabel id={id}>{name}</InputLabel>
            <Select labelId={id} id={id}
                value={value} defaultValue={defaultValue}
                label={label} onChange={onChange}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.name}>{option.name}</MenuItem>
                    ))}
                </Select>
        </FormControl>
    );
}
export default SelectContainer;
