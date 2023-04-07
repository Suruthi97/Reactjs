import Notifications from "../components/Notifications";
import Personal from "../components/Personal";
import Profile from "../components/Profile";
// import axios from 'axios';
import { useForm, useFormState  } from "react-hook-form";

export default function Registration() {
  const {register, handleSubmit, control, watch,  formState: { errors }} = useForm({
    defaultValues: {
        userName:'',
        about:'',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        country: '',
        state:'',
        postal:'',
        byEmail:'',
        pushNotif:''
      }
  });
  const { dirtyFields } = useFormState({
    control
  });
  const onSubmit = (event) => {
    event.preventDefault();
    alert("success");
}

  //  const onSubmit = (data) => console.log(data);
  // //  const url = 'http://localhost:3000/profileDetails';
  // //  axios.post(url, {register},
  // //          {headers: {'Content-Type': 'application/json',
  // //          },
  // //      })
  // //      .then(response => {console.log(response.data)})
  // //      .catch(error => {console.log(error.data)});

  // console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <div>
            <div className="container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Profile register={register} errors={errors}  dirtyFields={ dirtyFields }  />                    
                     <hr />
                    <Personal register={register} errors={errors} dirtyFields={ dirtyFields } />                    
                    <hr/>
                    <Notifications register={register} errors={errors} dirtyFields={ dirtyFields } />                   
                    <hr/>
                    <div className="form-btn">                        
                            <button className="btn btn-cancel">Cancel</button>
                            <button type="submit" data-testid="savebutton" className="btn btn-save">Save</button>                       
                    </div>
                </form>
            </div>
        </div>
    );
}