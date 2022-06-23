import './MedicalServices.css';
import image3 from '../../Assests/Image3.jpg';
function MedicalServices(){
    return(
        <div>
            <div><img src={image3} className="img3"></img></div><br/>
            <ol>
                <li>Anesthetics</li>
                <li>Breast Screening</li>
                <li>Cardiology</li>
                <li>Ear,Nose and Throat(ENT)</li>
                <li>Elderly services department</li>
                <li>Gastroenterology</li>
                <li>General surgery</li>
                <li>Gynecology</li>
                <li>Hematology</li>
                <li>Neonatal Unit</li>
            </ol>
        </div>
    );
}
export default MedicalServices;