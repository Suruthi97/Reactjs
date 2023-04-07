import Filter from '../../TableData/Filter';
import Data4 from './Data4';
import Select from '../../TableData/Select';
import Card from '../../TableData/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
function Quotationspage() {
    const navigate=useNavigate();
    const quotationHandler=(event)=>{
        event.preventDefault();
        navigate("/newquotation");
    }
    return (<div className="div">
        <div className="table1">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Filter />
                        </td>
                        <td>
                            <Stack directiom="row" spacing={1}>
                                <Paper className="paper">
                                    <IconButton type="submit" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <InputBase placeholder="Search Quotations" />
                                </Paper>
                            </Stack>
                                <Button className="button2" variant="contained" sx={{textTransform:"none"}} onClick={quotationHandler}>
                                    New Quote
                                </Button>
                        </td>
                        <td>
                            <Card name="Quotation" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Data4 />
                        </td>
                        <td>
                            <Select className="data5" />
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Quotationspage;