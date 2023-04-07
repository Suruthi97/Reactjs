import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Trend() {
    const [getImage, setImage] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/trend').then((response) => {
            setImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (<div>
        <div className="classdiv" >
            <h3>Trending Now</h3>
            <p className="box">
            {getImage.map((obj, index) => {
                return(<Link to="" key={index} > <img src={obj.image}  alt="Images" title={obj.title} className="img3" /></Link>
            );})}
            </p>
        </div>
    </div>);
}
export default Trend;