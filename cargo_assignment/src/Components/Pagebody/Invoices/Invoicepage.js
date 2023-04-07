import Filter from '../../TableData/Filter';
import Data3 from './Data3';
import Search from '../../TableData/Search';
import Select from '../../TableData/Select';
import Card from '../../TableData/Card';
function Invoicepage() {
    return (<div className="div">
        <div className="table1">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Filter />
                        </td>
                        <td>
                            <Search name="Search Invoice"/>
                        </td>
                        <td>
                            <Card name="Invoice"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Data3 />
                        </td>
                        <td>
                            <Select className="data5"/>
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Invoicepage;