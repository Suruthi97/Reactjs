import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PNG","JPG","GIF","upto 10 MB"];

function FilesUploader({ fileHandler, disabled }) {
  const [uploadFile, setUploadFile] = useState([]);

  const handleChange = (uploadFile1) => {
    const uploaded = [...uploadFile1];
    // // let uniqueFiles=allFiles.filter((item,index)=>allFiles.indexOf(item)===index);//allFiles now has unique values from both lists
    // console.log("upload file",uploadFile)
    // console.log("uploaded files",uploaded)
    // let duplicateFiles=uploadFile.filter(item=>uploaded.indexOf(item)== -1);//duplicate files

    // // let allFiles=[...uploaded,...duplicateFiles];
    // let filesToUpload=uploaded.filter(item=>duplicateFiles.indexOf(item)== -1);

    // console.log("dupli",duplicateFiles);
    // console.log("toup",filesToUpload);

    setUploadFile(uploaded);
    fileHandler(uploaded);
  };

  return (
    <div style={{ marginLeft: "10%" }}>
      <FileUploader
        handleChange={handleChange}
        name="file"
        maxSize={100}
        types={fileTypes}
        multiple={true}
        disabled={disabled}
      />
    </div>
  );
}

export default FilesUploader;
