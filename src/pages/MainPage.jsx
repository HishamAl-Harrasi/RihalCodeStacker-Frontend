import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileDropzone from "../components/FileDropzone";
import KeywordSelector from "../components/KeywordSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import "../styles/MainPage.css";

export default function MainPage(props) {
  const [dropzoneFiles, setDropzoneFiles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [responseIsSuccess, setResponseIsSuccess] = useState(false);

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (dropzoneFiles.length === 0 || keywords.length === 0) {
      // ADD FUNCTIONALITY FOR ERROR MESSAGE HERE
      console.log("Add some input");
      return;
    }

    const formData = new FormData();
    dropzoneFiles.forEach((file) => {
      formData.append("files", file);
    });

    keywords.forEach((keyword) => {
      formData.append("keywords", keyword);
    });

    await fetch("http://localhost:8000/upload-files", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.status === 200
          ? setResponseIsSuccess(true)
          : setResponseIsSuccess(false);

        res.json().then((data) => {
          props.setresumeAnalysisData(data);
        });
        if (setResponseIsSuccess) {
          navigate("/results");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mainPageContainer">
      <div className="dropzoneContainer">
        <FileDropzone
          dropzoneFiles={dropzoneFiles}
          setDropzoneFiles={setDropzoneFiles}
        />
      </div>
      <div>
        <KeywordSelector keywords={keywords} setKeywords={setKeywords} />
      </div>
      <div className="errors">
        <h4 style={{ color: "red" }}>*ERRORS HERE</h4>
      </div>
      <div className="btn">
        <button
          type="submit"
          className="UploadButton"
          onClick={(e) => handleSubmit(e)}
        >
          Upload & Analyse
          <FontAwesomeIcon icon={faFileImport} className="fa-1x uploadEmoji" />
        </button>
      </div>
    </div>
  );
}
