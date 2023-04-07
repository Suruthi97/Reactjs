import { ChevronLeft } from '@mui/icons-material';
import { ChevronRight } from '@mui/icons-material';
function Select(props) {
    return (<div className={props.class}>
        <div>
            <span className="span">Items per page:&nbsp;&nbsp;&nbsp;
                <select name="numbers" id="numbers">
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
            </span>&nbsp;&nbsp;&nbsp;
            <span>0 of 0</span>&nbsp;&nbsp;&nbsp;
            <ChevronLeft className='icon' /><ChevronRight className='icon' />
        </div>
    </div>);
}
export default Select;