import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import "./FileDropzone.css";

import React, { useState } from "react";

function displayFileNames(files) {
  if (files.length === 1) {
    return (
      <div className="selectedFiles">
        {files.slice(0, 2).map((file) => (
          <p className="fileName">{file.name}</p>
        ))}
        <span> and {files.length - 2} others..</span>
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
        <p>Drag and Drop Here!</p>
        <FontAwesomeIcon icon={faFileImport} className="fa-4x fileImportIcon" />
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
