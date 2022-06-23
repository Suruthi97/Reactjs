import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Users from '../../services/users';
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.users);
    const onLogout = (event) => {
        event.preventDefault();
        Users.logout(dispatch);
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li><Link className="navbar-brand" to="#"><i className="fa fa-medkit" aria-hidden="true"></i></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/medicalServices">Medical Services <span className="sr-only"></span></Link>
                        </li>
                        {!userInfo.loginStatus &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login <span className="sr-only"></span></Link>
                            </li>}
                        {!userInfo.loginStatus &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Register <span className="sr-only"></span></Link>
                            </li>}
                        {userInfo.loginStatus &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/bookAppointment">Book Appointment <span className="sr-only"></span></Link>
                            </li>}
                        {userInfo.loginStatus &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login" onClick={onLogout}>Logout <span className="sr-only"></span></Link>
                            </li>}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact">Contact <span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr className="line" />
        </div>
    );
}
export default Header;