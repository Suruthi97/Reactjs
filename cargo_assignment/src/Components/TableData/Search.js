import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
function Search(props) {
    return (<div>
        <Paper className="data3">
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase placeholder={props.name} />
        </Paper>
    </div>);
}
export default Search;