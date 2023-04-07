import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../App.scss';
function Datepicker() {
    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    }
    return (<div className="page">
        <div data-module="ds-datepicker" className="ds_datepicker">
            <label className="ds_label" htmlFor="start-date">Pick a date</label>
            <div className="ds_input__wrapper">
                <input id="start-date" data-maxdate="19/09/2020" data-mindate="09/08/2020" placeholder="dd/mm/yyyy" type="text" className="ds_input  ds_input--fixed-10" />
            </div>
        </div>
        <Button className="button-group" variant="outlined" onClick={onSubmit}>Submit</Button>
    </div>);
}
export default Datepicker;