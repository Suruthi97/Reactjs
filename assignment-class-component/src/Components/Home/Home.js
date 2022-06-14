import './Home.css';
import Libraryimage from '../../Assests/Library image.png';
import {Component} from 'react';
class Home extends Component{
    render(){
        return(<div>
            <div className="classdiv">Welcome to Library Management System<img src={Libraryimage} className="image1"></img></div>
        </div>);
    }
}
// function Home(){
//     return(<div>
//         <div className="classdiv">Welcome to Library Management System<img src={Libraryimage} className="image1"></img></div>
//     </div>);
// }
export default Home;