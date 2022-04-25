import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "../styles/FileDropzone.css";

function displayFileNames(files) {
  if (files.length === 1) {
    return (
      <div className="selectedFiles">
        <span className="currentlySelectedText">Currently Selected: </span>
        <span className="fileName">{files[0].name}</span>
      </div>
    );
  } else if (files.length === 2) {
    return (
      <div className="selectedFiles">
        <span className="currentlySelectedText">Currently Selected: </span>
        <span className="fileName">{files[0].name}</span>
        <span> and </span>
        <span className="fileName">{files[1].name}</span>
      </div>
    );
  } else if (files.length > 2) {
    return (
      <div className="selectedFiles">
        <span className="currentlySelectedText">Currently Selected: </span>
        <span className="fileName">{files[0].name}</span>
        <span> and </span>
        <span className="fileName">{files[1].name}</span>
        <span>and {files.length - 2} others..</span>
      </div>
    );
  }
}

function FileDropzone() {
  let [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop: (droppedFiles) => {
      setFiles(
        droppedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      console.log(droppedFiles);
    },
  });

  return (
    <div>
      <div className="dropArea" {...getRootProps()}>
        <input {...getInputProps()} />
        <h3>Drag & Drop Resumes Here!</h3>
        {/* <FontAwesomeIcon icon={faFilesImport} className="fa-4x fileImportIcon" /> */}
        <FontAwesomeIcon icon={faFilePdf} className="fa-4x fileImportIcon" />
        <p>
          Files must be in <b>PDF Format</b>..
        </p>
        {/*  HERE */}
        {displayFileNames(files)}
      </div>
    </div>
  );
}

export default FileDropzone;
