import '../App.css';

function TrialTable(props){
    return(
        <table>
             <thead style={{visibility:props.headerVisible}}>
                    <tr>
                        {props.cols.map((headerItem, index) => (
                            <th key={index}>{headerItem.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr key={index} className={props.rowClassName}>
                            {props.cols.map((col, key) => (
                                <td key={key} className={col.colsClassName}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}
export default TrialTable;