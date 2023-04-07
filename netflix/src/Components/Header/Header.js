import { Link } from 'react-router-dom';
import image1 from '../../Assests/Image1.jpg';
import image2 from '../../Assests/Image2.jpg';
function Header() {
    return (<div className="header">
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark text-white">
            <Link className="navbar-brand" to="#"><img src={image1} className="img1" alt=""></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">TV Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">New & Popular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">My List</Link>
                    </li>
                    <li className="nav-item1">
                        <Link className="nav-link" to="#">
                            <i className="fas fa-search" aria-hidden="true"></i></Link>
                    </li>
                    <li className="nav-item2">
                        <Link className="nav-link" to="#">
                            <i className="far fa-bell"></i></Link>
                    </li>
                    <li className="nav-item"><div className="dropdown">
                            <button className="btn btn-dark1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={image2} className="img2" alt=""></img>
                            </button>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">Manage Profiles</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Account</Link>
                                <Link className="dropdown-item" to="#">Help Centre</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Sign Out of Netflix</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>);
}
export default Header;