import './Contact.css';
import { useState } from 'react';
import { emailValidation } from '../Validation';
function Contact() {
    const [getForm, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [getValidation, setValidation] = useState({
        email: ''
      });
    const onChangeHandler = (event) => {
        setForm({
            ...getForm, [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setValidation({
            ...getValidation, email: !emailValidation(getForm.email) ? "Please provide proper email ID" : ""
        });
        if (emailValidation(getForm.email)) {
            alert("Message sent");
            sessionStorage.setItem("name", getForm.name);
            sessionStorage.setItem("email", getForm.email);
            sessionStorage.setItem("subject", getForm.subject);
            sessionStorage.setItem("message", getForm.message);
        }
    }
    return (
        <div>
            <div className="divcon"><h3>Contact Us</h3>
                <table className="contable">
                    <tbody>
                        <tr>
                            <td className="data3">
                                <p className="text-center"><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                                <p className="text-center">ADDRESS</p>
                                <p className="text-center">27 13 Lowe Haven</p>
                            </td>
                            <td className="data3">
                                <p className="text-center"><i className="fa fa-mobile" aria-hidden="true"></i></p>
                                <p className="text-center">PHONE</p>
                                <p className="text-center">111 343 43 43</p>
                            </td>
                            <td className="data3">
                                <p className="text-center"><i className="fa fa-file-text-o" aria-hidden="true"></i></p>
                                <p className="text-center">EMAIL</p>
                                <p className="text-center">business@info.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="divcon"><h3>Drop us a Query</h3><br />
                <div className="divcon1">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" className="form-control" onChange={onChangeHandler} value={getForm.name} id="name" placeholder="Name" name="name" /></td>
                                <td>
                                    <input type="text" className="form-control" onChange={onChangeHandler} value={getForm.email} id="email" placeholder="Email" name="email" />
                                    {getValidation.email && <div className="alert alert-danger" role="alert">
                                        {getValidation.email}
                                    </div>}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div><input type="text" className="form-control" onChange={onChangeHandler} value={getForm.subject} id="subject" placeholder="Subject" name="subject" /></div><br />
                    <div><textarea className="form-control" onChange={onChangeHandler} value={getForm.message} id="message" placeholder="Message" name="message"></textarea></div><br />
                    <button className="btn btn-success3" onClick={onSubmitHandler}>Send Message</button>
                </div>
            </div>
        </div>
    );
}
export default Contact;