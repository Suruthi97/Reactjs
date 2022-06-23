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
                        <td className="data"><img src={image1} className="img1"></img></td>
                    </tr>
                </tbody>
            </table>
            <div class="modal" id="mod" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">About Online Healthcare services</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Find a Doctor today and Book your Appointment Online Now</p>
                            <div>A doctor appointment booking system, available on the internet, allows patients to book an appointment from the comfort of their homes, using their computer, laptop or mobile, and at any time. No matter where they are, they can contact doctors of their choice in any location.</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;