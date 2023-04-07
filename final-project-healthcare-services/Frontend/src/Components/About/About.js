import './About.css';
import image1 from '../../Assests/Image1.jpg';
function About() {
    return (
        <div>
            <table>
                <tbody className="table1">
                    <tr>
                        <td className="data">
                            <div><h2>Online medical help</h2><hr className="line1" />
                                <div>To summarize, an appointment system helps you manage appointments and seamlessly check-in patients to see consultants on arrival. Therefore, staff can focus on meeting and supporting patients to deliver a better all-round experience.</div></div>
                            <br /><br />
                            <button className="btn btn-success3" data-target="#mod" aria-hidden="true" data-toggle="modal">Read more</button>
                        </td>
                        <td className="data"><img src={image1} className="img1" alt="image"></img></td>
                    </tr>
                </tbody>
            </table>
            <div className="modal" id="mod" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">About Online Healthcare services</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Find a Doctor today and Book your Appointment Online Now</p>
                            <div>A doctor appointment booking system, available on the internet, allows patients to book an appointment from the comfort of their homes, using their computer, laptop or mobile, and at any time. No matter where they are, they can contact doctors of their choice in any location.</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;