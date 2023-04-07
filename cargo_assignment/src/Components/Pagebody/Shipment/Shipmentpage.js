import Filter from '../../TableData/Filter';
import Data2 from './Data2';
import Search from '../../TableData/Search';
import Select from '../../TableData/Select';
import Card from '../../TableData/Card';
function Shipmentpage() {
    return (<div>
        <div className="table1">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Filter />
                        </td>
                        <td>
                            <Search name="Search Shipments"/>
                        </td>
                        <td>
                            <Card name="Shipments"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Data2 />
                        </td>
                        <td>
                            <Select className="data4"/>
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Shipmentpage;