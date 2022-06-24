import './BookAppointment.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function BookAppointment() {
    const [setList] = useState([]);
    const navigate = useNavigate();
    const [getApp, setApp] = useState({
        name: '',
        dob: '',
        issue: '',
        branch: '',
        speciality: '',
        visit: '',
        email: '',
        mobile: ''
    })
    useEffect(() => {
        axios.get('http://localhost:3000/hospital').then((response) => {
            console.log(response);
            setList(response.data);
        }).catch((error) => {
            console.log(error);
        })
        // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
        //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
        // }
    }, [])
    const onChangeHandler=(event)=>{
        setApp({
            ...getApp,[event.target.name]:event.target.value
        })
    }
    const onBookHandler=(event)=>{
        event.preventDefault();
        if(getApp.name&&getApp.dob&&getApp.issue&&getApp.branch&&getApp.speciality&&getApp.visit&&getApp.email&&getApp.mobile){
            axios.post('http://localhost:3000/hospital',{
                name:getApp.name,
                dob:getApp.dob,
                issue:getApp.issue,
                branch:getApp.branch,
                speciality:getApp.speciality,
                visit:getApp.visit,
                email:getApp.email,
                mobile:getApp.mobile
            }).then(()=>{
                navigate('/confirmation');
            }).catch(()=>{
                alert("Error");
            })
        }
        else{
            alert("Add all details to book the appointment");
        }
    }
    return (
        <div className="divcon">
            <h4>Book Appointment</h4><br />
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Patient Name</label></td>
                            <td className="divcon"><input className="classform2" type="text" id="name" name="name" onChange={onChangeHandler} /><br /></td>
                        </tr>
                        <tr>
                            <td><label>Patient DOB</label></td>
                            <td className="divcon"><input className="classform2" type="date" id="dob" name="dob" onChange={onChangeHandler}/><br /></td>
                        </tr>
                        <tr>
                            <td><label>Patient Medical issue</label></td>
                            <td className="divcon"><textarea className="classform3" type="text" id="issue" name="issue" onChange={onChangeHandler}></textarea><br /></td>
                        </tr>
                        <tr>
                            <td><label>Select Hospital Branch</label></td>
                            <td className="divcon">
                                <select id="branch" className="classform2" name="branch" onChange={onChangeHandler}>
                                    <option>--Select branch--</option>
                                    <option>Branch1</option>
                                    <option>Branch2</option>
                                    <option>Branch3</option>
                                    <option>Branch4</option>
                                </select><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Doctor Specialist</label></td>
                            <td className="divcon">
                                <select id="speciality" className="classform2" name="speciality" onChange={onChangeHandler}>
                                    <option>--Select speciality--</option>
                                    <option>Speciality1</option>
                                    <option>Speciality2</option>
                                    <option>Speciality3</option>
                                    <option>Speciality4</option>
                                </select><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Visit Date</label></td>
                            <td className="divcon"><input type="date" id="visit" name="visit" className="classform2" onChange={onChangeHandler}/><br /></td>
                        </tr>
                        <tr>
                            <td><label>Email</label></td>
                            <td className="divcon"><input type="email" id="email" name="email" className="classform2" onChange={onChangeHandler}/><br /></td>
                        </tr>
                        <tr>
                            <td><label>Mobile number</label></td>
                            <td className="divcon"><input type="number" id="mobile" name="mobile" className="classform2" onChange={onChangeHandler} /><br /><br /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="divcon"><button type="submit" className="btn btn-success3" onClick={onBookHandler}>Book Appointment</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
export default BookAppointment;