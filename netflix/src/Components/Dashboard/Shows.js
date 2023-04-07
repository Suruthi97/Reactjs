import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Shows() {
    const [getImage, setImage] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/shows').then((response) => {
            setImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (<div>
        <div className="classdiv" >
            <h3>TV Shows</h3>
            <p className="box">
            {getImage.map((obj, index) => {
                return(<Link to="" key={index} > <img src={obj.image}  alt="Images" title={obj.title} className="img3" /></Link>
            );})}
            </p>
        </div>
    </div>);
}
export default Shows;