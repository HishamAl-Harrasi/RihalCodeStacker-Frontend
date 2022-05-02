import React from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

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

function FileDropzone(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop: (droppedFiles) => {
      props.setDropzoneFiles(
        droppedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div>
      <div className="dropArea" {...getRootProps()}>
        <input {...getInputProps()} multiple />
        <h3>Drag & Drop Resumes Here!</h3>
        <FontAwesomeIcon icon={faFilePdf} className="fa-4x fileImportIcon" />
        <p>
          Files must be in <b>PDF Format</b>..
        </p>
        {displayFileNames(props.dropzoneFiles)}
      </div>
    </div>
  );
}

export default FileDropzone;
