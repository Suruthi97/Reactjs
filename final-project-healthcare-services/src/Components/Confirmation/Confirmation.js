import './Confirmation.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Confirmation() {
    const navigate = useNavigate();
    const [getList, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/hospital/').then((response) => {
            console.log(response);
            setList(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    // const navigate = useNavigate();
    // const [getList,setList] = useState([]);
    // const [setIndex] = useState(-1);
    // const [getBook, setBook] = useState({
    //     name: '',
    //     dob: '',
    //     issue: '',
    //     branch: '',
    //     speciality: '',
    //     visit: '',
    //     email: '',
    //     mobile: ''
    // })
    // const fetchData = (index) => {
    //     setBook({
    //         branch: getList[index].branch,
    //         name: getList[index].name,
    //         speciality: getList[index].speciality,
    //         visit: getList[index].visit,
    //         issue:getList[index].issue
    //     })
    //     setIndex(index);
    //     // fetch('http://localhost:3000/hospital')
    //     //   .then(response => {
    //     //     return response.json()
    //     //   })
    //     //   .then(data => {
    //     //     setBook(data)
    //     //   })
    //   }
    //   useEffect(() => {
    //     axios.get('http://localhost:3000/library').then((response) => {
    //         console.log(response);
    //         setList(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    //     // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
    //     //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
    //     // }
    // }, [])    
    const onClickHandler = (index) => {
        navigate('/home');
        let bookDetails = [...getList];
        let id = bookDetails[index].id;
        axios.delete('http://localhost:3000/hospital/' + id).then((response) => {
            bookDetails.splice(index, 1);
            setList(bookDetails);
        }).catch(() => {

        })
    }
    return (
        <div className="conf1">
            <h2 className="headconf">Appointment Confirmation</h2>
            <p>Please be informed that your appointment has been booked as following:</p>
            <hr className="lineconf" />
            {getList.map((obj, index) => {
                return (
                    <form key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Hospital Branch:</label></td>
                                    <td className="condata">{obj.branch}</td>
                                </tr>
                                <tr>
                                    <td><label>Patient Name:</label></td>
                                    <td className="condata">{obj.name}</td>
                                </tr>
                                <tr>
                                    <td><label>Doctor Specialist:</label></td>
                                    <td className="condata">{obj.speciality}</td>
                                </tr>
                                <tr>
                                    <td><label>Visit Date:</label></td>
                                    <td className="condata">{obj.visit}</td>
                                </tr>
                                <tr>
                                    <td><label>Medical issue desc:</label></td>
                                    <td className="condata">{obj.issue}</td>
                                </tr>
                            </tbody>
                        </table><br />
                        <button type="submit" onClick={() => onClickHandler(index)} className="btn btn-success2">Go to Homepage</button>
                    </form>
                )
            })}
        </div>
    );
}
export default Confirmation;