// import FilesUploader from '../components/FilesUploader/FilesUploader';
import {useState} from 'react';





export default function Profile({handleFormChange,  getProfile,  getValidation }) {
  
    // const fileHandler = (uploadedFiles) => {
    //     let data = cover.coverPhoto;        
    //     for (let i = 0; i < uploadedFiles.length; i++) {
    //         let newFile = {
    //           fileDetails: uploadedFiles[i],
    //           fileType: 'image'
    //         }
    //         data.push(newFile);
    //     }
    //     handleImageChange(data);
    // }     
    const [file, setFile] = useState({
        photo:''
      });
      const [cover, setCover] = useState({        
        coverPhoto:''
      }); 
      const [isSelected, setIsSelected] = useState(false);
    function handleImageChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0])); 
                
      }    
      function handleCoverChange(e) {
        console.log(e.target.files);           
        setCover(URL.createObjectURL(e.target.files[0]));
        setIsSelected(true);  
      }

    return (
        <div>    
            <div className="row">
                        <div className="col-9">
                            <div className="text-style-lg"><h3>Profile</h3></div>
                            <div className="text-style-md">This information will be displayed publicly so be careful what you share</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Username
                        </div>
                        <div className="col-8">
                            <div className="input-group input-width-lg">
                                <span className="input-group-text" id="basic-addon1">workcation.com/</span>
                                <input type="text" className="form-control"  onChange={handleFormChange} value={getProfile.userName} id="userName" name="userName" placeholder="www.example.com" aria-describedby="basic-addon1" />
                                {getValidation.userName && <div class="alert alert-danger" role="alert">
                                {getValidation.userName}
                                </div> }
                            </div>
                        </div>
                    </div>
                    <hr />                    
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            About
                        </div>
                        <div className="col-8 ">
                            <textarea type="text" className="form-control input-width-lg" rows={3} onChange={handleFormChange} id="about" name="about" value={getProfile.about} placeholder="you@example.com" />
                            {getValidation.about && <div class="alert alert-danger" role="alert">
                                {getValidation.about}
                                </div> }
                            <p>
                                write a few sentence about yourself.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Photo
                        </div>
                        
                        <div className="col-8">
                            <img src={file} className="person-icon" id="photo" name="photo"></img>   
                            <label  htmlFor="upload-photo">Change</label>                         
                            <input type="file" id="upload-photo" name="photo" onChange={handleImageChange} value={file.photo} style={{ display: "none" }} />   
                            <p>{file.name}</p>                         
                        </div>
                   
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Cover Photo
                        </div>
                        <div className="col-8">
                        {/* <FilesUploader fileHandler={fileHandler} cover={cover}/> */}
                        {/* <FilesUploader fileHandler={fileHandler} cover={cover.coverPhoto}/> */}
                            {/* <form id="form-file-upload"> */}
                            <div id="form-file-upload"> 
                                <input type="file" id="coverPhoto" name="coverPhoto"  value={cover.coverPhoto} onChange={handleCoverChange}  style={{ display: "none" }} multiple={true} />
                                <label id="label-file-upload" htmlFor="coverPhoto">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                                        </svg>
                                        <img src={cover}  id="cover" name="cover" style={{ width:"50px",height:"50px"}}></img>   
                                        <p><button className="upload-button">Upload a file </button> </p>
                                        <p>PNG,JPG,GIF upto 10MB</p>                                                                              
                                    </div>
                                </label>
                                {isSelected ? (
                                    <div>
                                        <p>Filename: {cover.name}</p>
                                    </div>
                                ) : (
                                    <p>Select a file to show details</p>
                                )}
                                {console.log(cover.name)}
                                </div>
                            {/* </form> */}                                
                        </div>
                    </div>       
        </div>
    );
}