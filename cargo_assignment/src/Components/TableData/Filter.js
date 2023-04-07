import { Link } from 'react-router-dom';
function Filter() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="tabledata1">Filters</td>
                        <td className="tabledata"><span className="sort">Sort |</span><span><Link to="#" className="link">A to Z</Link></span>&nbsp;<span><Link to="#" className="link">Recently Added</Link></span></td>
                    </tr>
                </tbody>
            </table>
        </div>);
}
export default Filter;