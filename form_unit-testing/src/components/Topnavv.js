import logocopy from '../assets/logocopy.jpg';
function Topnavv() {
    return (
        <div className="navbar1">
            <span><i className="fa fa-search serachicon" aria-hidden="true"></i>
                <input type="text" className="searchbar" placeholder="Search.." /></span>
            <span><i className="fa fa-bell notification"></i>
                <img src={logocopy} className="avatar"></img></span>
        </div>)
}
export default Topnavv;