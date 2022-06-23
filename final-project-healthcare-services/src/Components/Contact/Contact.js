import './Contact.css';
function Contact() {
    return (
        <div>
            <div className="divcon"><h3>Contact Us</h3>
                <table className="contable">
                    <tbody>
                        <tr>
                            <td className="data3">
                                <p className="text-center"><i class="fa fa-map-marker" aria-hidden="true"></i></p>
                                <p className="text-center">ADDRESS</p>
                                <p className="text-center">27 13 Lowe Haven</p>
                            </td>
                            <td className="data3">
                                <p className="text-center"><i class="fa fa-mobile" aria-hidden="true"></i></p>
                                <p className="text-center">PHONE</p>
                                <p className="text-center">111 343 43 43</p>
                            </td>
                            <td className="data3">
                                <p className="text-center"><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
                                <p className="text-center">EMAIL</p>
                                <p className="text-center">business@info.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="divcon"><h3>Drop us a Query</h3><br/>
                <div className="divcon1">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" className="form-control" id="name" placeholder="Name" name="name"/></td>
                                <td>
                                    <input type="text" className="form-control" id="email" placeholder="Email" name="email"/></td>
                            </tr>
                        </tbody>
                    </table>
                <br />
                <div><input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"/></div><br />
                <div><textarea className="form-control" id="message" placeholder="Message" name="message"></textarea></div><br/>
                <button className="btn btn-success3">Send Message</button>
                </div>
            </div>
        </div>
    );
}
export default Contact;