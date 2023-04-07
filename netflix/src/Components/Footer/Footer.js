import { Link } from 'react-router-dom';
function Footer() {
    return (<div className="divclass">
        <div>
            <Link to="#" className="logos"><i className="fab fa-facebook-square fa-2x logo"></i></Link>
            <Link to="#" className="logos"><i className="fab fa-instagram fa-2x logo"></i></Link>
            <Link to="#" className="logos"><i className="fab fa-twitter fa-2x logo"></i></Link>
            <Link to="#" className="logos"><i className="fab fa-youtube fa-2x logo"></i></Link>
        </div>
        <div className="links1">
            <ul>
                <li><Link to="#">Audio and Subtitles</Link></li>
                <li><Link to="#">Audio Description</Link></li>
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#">Gift Cards</Link></li>
                <li><Link to="#">Media Center</Link></li>
                <li><Link to="#">Investor Relations</Link></li>
                <li><Link to="#">Jobs</Link></li>
                <li><Link to="#">Terms of Use</Link></li>
                <li><Link to="#">Privacy</Link></li>
                <li><Link to="#">Legal Notices</Link></li>
                <li><Link to="#">Corporate Information</Link></li>
                <li><Link to="#">Cookie Preferences</Link></li>
                <li><Link to="#">Contact Us</Link></li>
            </ul>
        </div><br />
        <div className="element"><div className="links1"><Link to="#">Service Code</Link></div></div><br />
        <div className="para">1997-2022 Netflix, Inc.</div><br />
    </div>);
}
export default Footer;