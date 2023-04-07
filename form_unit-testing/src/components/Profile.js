import Person_icon from "../assets/icon.png";
import { useState } from 'react';


export default function Profile({ handleFormChange, getProfile, photo }) {
    const [file, setFile] = useState();
    const [coverPhoto, setCoverPhoto] = useState();
    function handlePhotoChange(e) {
        console.log(e.target.files);
        sessionStorage.setItem("photo", e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }
    function handleCoverChange(e) {
        console.log(e.target.files);
        sessionStorage.setItem("coverPhoto", e.target.files);
        setCoverPhoto(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <div className="text-style-lg"><h3 data-testid="profile">Profile</h3></div>
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
                        <input type="text" className="form-control" onChange={handleFormChange} value={getProfile.userName} id="userName" name="userName" placeholder="www.example.com" aria-describedby="basic-addon1" />
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
                <div className="col-8" data-testid="photo-upload">
                    <label htmlFor="upload-button">
                        <span className="fa-stack fa-3x">
                            <i className="fas fa-regular fa-circle fa-stack-2x" />
                            <i className="fas fa-solid fa-user fa-stack-2x fa-inverse pt-2 pb-2" />
                        </span>
                    </label>&nbsp;&nbsp;&nbsp;
                    <input type="file" id="upload-button" style={{ marginLeft: "200px", display: "none" }} onChange={handlePhotoChange} />
                    <button>Change</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Cover Photo
                </div>
                <div className="col-8" id="form-file-upload">
                    <input type="file" id="input-file-upload" onChange={handleCoverChange} multiple={true} />
                    <label id="label-file-upload" htmlFor="input-file-upload">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                            </svg>
                            <p><button className="upload-button">Upload a file or drag and drop</button></p>
                            <p>PNG,JPG,GIF upto 10MB</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}