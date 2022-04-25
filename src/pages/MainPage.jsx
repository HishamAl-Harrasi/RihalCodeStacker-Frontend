import React, { Component } from "react";
import FileDropzone from "../components/FileDropzone";
import KeywordSelector from "../components/KeywordSelector";
import "../styles/MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";

export default class MainPage extends Component {
  render() {
    return (
      <div className="mainPageContainer">
        <div className="dropzoneContainer">
          <FileDropzone />
        </div>
        <div>
          <KeywordSelector />
        </div>
        <div className="btn">
          <button type="submit" className="UploadButton">
            Upload & Analyse
            <FontAwesomeIcon
              icon={faFileImport}
              className="fa-1x uploadEmoji"
            />
          </button>
        </div>
      </div>
    );
  }
}
