import './Home';
import image2 from '../../Assests/Image2.jpg';
function Home() {
    return (
        <div className="home1">
            <div className="home">Welcome to Healthcare Services portal</div>
            <div><img src={image2} className="image1" alt="image"></img></div>
        </div>
    );
}
export default Home;