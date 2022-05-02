import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import FileDropzone from "../components/FileDropzone";
import KeywordSelector from "../components/KeywordSelector";
import "../styles/MainPage.css";

export default function MainPage(props) {
  const [dropzoneFiles, setDropzoneFiles] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const { REACT_APP_SERVER } = process.env;

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (dropzoneFiles.length === 0) {
      setErrorMessage("* Import at least one resume file..");
      return;
    } else if (keywords.length === 0) {
      setErrorMessage("* Enter at least one keyword..");
    }

    const formData = new FormData();
    dropzoneFiles.forEach((file) => {
      formData.append("files", file);
    });

    keywords.forEach((keyword) => {
      formData.append("keywords", keyword);
    });

    await fetch(`${REACT_APP_SERVER}/upload-files`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        let responseIsSuccess = false;
        res.status === 200
          ? (responseIsSuccess = true)
          : (responseIsSuccess = false);

        res.json().then((data) => {
          props.setresumeAnalysisData(data);
          localStorage.setItem("data", JSON.stringify(data));
        });
        if (responseIsSuccess) {
          navigate("/results");
        } else {
          setErrorMessage(
            "* A server error occurred while processing the request. Please check that the file imported is a PDF, or alternatively contact the server administrator"
          );
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
        <KeywordSelector
          keywords={keywords}
          setKeywords={setKeywords}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div className="errors">
        <h4 style={{ color: "red" }}>{errorMessage}</h4>
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
