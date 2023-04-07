import {firstNameValidation,lastNameValidation,emailValidation,streetValidation,cityValidation,stateValidation,postalValidation}  from '../components/Validation';
import {userNameValidation,aboutValidation}  from '../components/Validation';
import Notifications from "../components/Notifications";
import Personal from "../components/Personal";
import Profile from "../components/Profile";
import {useState} from 'react';
import {useNavigate}  from 'react-router-dom';
import axios from 'axios';


export default function Registration() {
  const navigate=useNavigate();

    const[getPersonal,setPersonal]=useState({
        firstName:'',
        lastName:'',
        email:'',
        country:'',
        street:'',
        city:'',
        state:'',
        postal:''
      });
      const[getProfile,setProfile]=useState({
        userName:'',
        about:''
    });
    const[getNotification,setNotification]=useState({
        byEmail:'',
        pushNotification:''
    });
    const [file, setFile] = useState({
      photo:''
    });
    const [cover, setCover] = useState({      
      coverPhoto:''
    }); 
    const [isSelected, setIsSelected] = useState(false);
    const[getValidation,setValidation]=useState({
        userName:'',
        about:'',
        firstName:'',
        lastName:'',
        email:'',
        country:'',
        street:'',
        city:'',
        state:'',
        postal:''
    });
   

        const onChangeHandler=(event)=>{
            setProfile({
              ...getProfile,[event.target.name]:event.target.value
            })
            setPersonal({
                ...getPersonal,[event.target.name]:event.target.value
              })
              setNotification({
                ...getPersonal,[event.target.name]:event.target.value
              })
          }
        function handleImageChange(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0])); 
            setIsSelected(true);           
          }     
          function handleCoverChange(e) {
            console.log(e.target.files);           
            setCover(URL.createObjectURL(e.target.files[0]));
          } 
        const onSubmitHandler=(event)=>{
          event.preventDefault()
          const url = 'http://localhost:3000/profileDetails';
          const formData = new FormData();
          formData.append('file', file);
          formData.append('fileName', file.name);
          formData.append('cover', cover);
          formData.append('coverName', cover.name);
          const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          }; 

          setValidation({
            ...getValidation,userName:!userNameValidation(getProfile.userName)?"Please provide the userName":'',
            about:!aboutValidation(getProfile.about)?"Please provide the your description":'',
            firstName:!firstNameValidation(getPersonal.firstName)?"Please provide the firstName":'',
            lastName:!lastNameValidation(getPersonal.lastName)?"Please provide the lastName":'',
            email:!emailValidation(getPersonal.email)?"please provide email":'',
            street:!streetValidation(getPersonal.street)?"please provide street name":'',
            city:!cityValidation(getPersonal.city)?"please provide city":'',
            state:!stateValidation(getPersonal.state)?"please provide state":'',
            postal:!postalValidation(getPersonal.postal)?"please provide postal code":'',   
          });

          if(getProfile.userName && getProfile.about && getPersonal.firstName && getPersonal.lastName && getPersonal.email
            && getPersonal.country && getPersonal.street && getPersonal.city && getPersonal.state && getPersonal.postal
           ){
              //  && getNotification.byEmail && getNotification.pushNotification){
          axios.post(url,  {formData,
          //   sessionStorage.setItem(currentPage,JSON.stringify(formData));  
          userName:getProfile.userName,
          about:getProfile.about,          
          firstName:getPersonal.firstName,
          lastName:getPersonal.lastName,
          email:getPersonal.email,
          country:getPersonal.country,
          street:getPersonal.street,
          city:getPersonal.city,
          state:getPersonal.state,
          postal:getPersonal.postal,
          byEmail:getNotification.byEmail,
          pushNotification:getNotification.pushNotification,
          // photo:file.photo,
          // cover:cover.coverPhoto          
          }).then((response)=>{
            alert("success");
            console.log(file.photo);
            console.log(cover.coverPhoto);
            navigate('/dashboard');
          }).catch(()=>{
             alert("error");
          })
        }  
    
    else{
      alert("Field are empty or enter valid data");
    }


   
  }
        // sessionStorage.setItem(currentPage,JSON.stringify(formData));  
        // sessionStorage.setItem("userName",getProfile.userName);
        // sessionStorage.setItem("about",getProfile.about);
        //   sessionStorage.setItem("firstName",getPersonal.firstName);
        //   sessionStorage.setItem("lastName",getPersonal.lastName);
        //   sessionStorage.setItem("email",getPersonal.email);
        //   sessionStorage.setItem("country",getPersonal.country);
        //   sessionStorage.setItem("street",getPersonal.street);
        //   sessionStorage.setItem("city",getPersonal.city);
        //   sessionStorage.setItem("state",getPersonal.state);
        //   sessionStorage.setItem("postal",getPersonal.postal);
        //   sessionStorage.setItem("byEmail",getNotification.byEmail);
        //   sessionStorage.setItem("pushNotification",getNotification.pushNotification);
        // //   sessionStorage.setItem("photo",photo.profile);
        //   alert("success");         
  
    

    return (
        <div>
            <div className="container">
                <form className="form">
                    <Profile handleFormChange={onChangeHandler} getValidation={getValidation} getProfile={getProfile} />                    
                    <hr />
                    <Personal handleChange={onChangeHandler}   getPersonal={getPersonal} getValidation={getValidation}/>                    
                    <hr/>
                    <Notifications handleFormChange={onChangeHandler} getNotification={getNotification}/>                   
                    <hr/>
                    <div className="form-btn">                        
                            <button className="btn btn-cancel">Cancel</button>
                            <button type="submit" onClick={onSubmitHandler} className="btn btn-save">Save</button>                       
                    </div>
                </form>
            </div>
        </div>
    );
}