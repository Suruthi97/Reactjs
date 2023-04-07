// import FilesUploader from '../components/FilesUploader/FilesUploader';
import { useState } from 'react';
// import { useDropzone } from "react-dropzone";




export default function Profile({ register, errors, dirtyFields }) {
  const [files, setFiles] = useState([])

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setFiles(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     )
  //   },
  // })

  // const images = files.map((file) => (
  //   <div key={file.name}>
  //     <div>
  //       <img src={file.preview} style={{ width: "200px" }} alt="preview" />
  //       <p>{file.name}</p>
  //     </div>
  //   </div>
  // ))

  //   const [file, setFile] = useState({
  //       photo:''
  //     });

  //     const [cover, setCover] = useState({        
  //       coverPhoto:''
  //     }); 

  //     function handleImageChange(e) {
  //       console.log(e.target.files);
  //       setFile(URL.createObjectURL(e.target.files[0]));                 
  //     }    

  //     function handleCoverChange(e) {
  //       console.log(e.target.files);           
  //       setCover(URL.createObjectURL(e.target.files[0]));       
  //     }

  //     const handleChange = (file) => {
  //       setCover(file);
  //     };

  return (
    <div data-testid="profile">
      <div className="row">
        <div className="col-9">
          <div className="text-style-lg"><h3>Profile</h3></div>
          <div className="text-style-md">This information will be displayed publicly so be careful what you share</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
          UserName
        </div>
        <div className="col-8">
          <div className="input-group input-width-lg">
            <span className="input-group-text" id="basic-addon1">workcation.com/</span>
            <input type="text" className="form-control"
              {...register("userName", {
                required: true,
                maxLength: 20,

                pattern: /^[A-Za-z]+$/i
              })}
              placeholder="www.example.com" aria-describedby="basic-addon1" />
            {errors?.userName?.type === "required" && <p className='errors-msg'>This field is required</p>}
            {errors?.userName?.type === "maxLength" && (<p className='errors-msg'>User name cannot exceed 20 characters</p>)}
            {/* {errors?.userName?.type === "minLength" && (<p  className='errors-msg'>Not Valid FirstName</p>)} */}
            {errors?.userName?.type === "pattern" && (<p className='errors-msg'>Alphabetical characters only</p>)}
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
          About
        </div>
        <div className="col-8 ">

          <textarea type="text" className="form-control input-width-lg" rows={3} placeholder="Type something about yourself"
            {...register("about", {
              required: true,
              maxLength: 100,
              minLength: 2,
              pattern: /^[A-Za-z0-9]+$/i
            })}
          />
          {errors?.about?.type === "required" && <p className='errors-msg'>This field is required</p>}
          {errors?.about?.type === "maxLength" && (<p className='errors-msg'>Description about yourself exceed 100 characters</p>)}
          {errors?.about?.type === "minLength" && (<p className='errors-msg'>Not valid information</p>)}
          {errors?.about?.type === "pattern" && (<p className='errors-msg'>Special characters not allowed.</p>)}
          <p>
            write a few sentence about yourself.
          </p>
        </div>
      </div>
      <hr />
      {/* <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Photo
                        </div>
                        
                        <div className="col-8">
                            <img src={file} className="person-icon" id="photo" name="photo"></img>   
                            <label  htmlFor="upload-photo">Change</label>                         
                            <input type="file" id="upload-photo" name="photo" onChange={handleImageChange} value={file.photo} style={{ display: "none" }} />   
                            <p>{file.name}</p>                         
                        </div>
                   
                    </div>  */}
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
          Cover Photo
          {/* {images} */}
        </div>
        <div className="col-8">
          <div id="form-file-upload">
            <label id="label-file-upload" htmlFor="coverPhoto">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                </svg>
                <p><button className="upload-button">Upload a file </button> </p>
                <p>PNG,JPG,GIF upto 10MB</p>
              </div>
            </label>
          </div>
          <div></div>

        </div>
      </div>
    </div>
  );
}