import Person_icon from "../assets/icon.png";
import Notifications from "../components/Notifications";
import Personal from "../components/Personal";
import Profile from "../components/Profile";
import { useState } from 'react';


export default function Registration() {

    const [getPersonal, setPersonal] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        street: '',
        city: '',
        state: '',
        postal: ''
    });
    const [getProfile, setProfile] = useState({
        userName: '',
        about: ''
    });
    const [getNotification, setNotification] = useState({
        byEmail: '',
        pushNotification: ''
    });
    const [photo, setPhoto] = useState();

    const onChangeHandler = (event) => {
        setProfile({
            ...getProfile, [event.target.name]: event.target.value
        })
        setPersonal({
            ...getPersonal, [event.target.name]: event.target.value
        })
        setNotification({ 
            ...getPersonal, [event.target.name]: event.target.value
        })
    }
    function handleChange(e) {
        console.log(e.target.files);
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert("success");
    }

    return (
        <div>
            <div className="container">
                <form className="form">
                    <Profile handleFormChange={onChangeHandler} handleImageChange={handleChange} getProfile={getProfile} />
                    <hr />
                    <Personal handleChange={onChangeHandler} getPersonal={getPersonal} photo={photo} />
                    <hr />
                    <Notifications handleFormChange={onChangeHandler} getNotification={getNotification} />
                    <hr />
                    <div className="form-btn">
                        <button className="btn btn-cancel">Cancel</button>
                        <button disabled={!getProfile.userName || !getProfile.about || !getPersonal.firstName || !getPersonal.lastName || !getPersonal.email || !getPersonal.country || !getPersonal.city || !getPersonal.postal || !getPersonal.state || !getPersonal.street} data-testid="savebutton" type="submit" onClick={onSubmitHandler} className="btn btn-save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}