import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/ResultsPage.css";

export default function ResultsPage(props) {
  const { acceptedFiles, unacceptedFiles } = JSON.parse(
    window.localStorage.getItem("data")
  );

  return (
    <div className="resultsPageContainer">
      <div className="resultsHeading">
        <h1>Analysis Results</h1>
        <hr className="titleLine" />
      </div>
      <a
        className="exportButton"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(props.data, null, 2)
        )}`}
        download="resumeResults.json"
      >
        Export Results as JSON
      </a>
      <div>
        {acceptedFiles.map((result, index) => {
          return (
            <div className="mainResultsDataContainer" key={index}>
              <div className="keywordHeading">
                <div className="keywordHeadingSection1">
                  <span className="resultsFilename">{result.filename}</span>
                  <span className="keywordMatches">
                    Keywords Found: {result.keywordsFound.length}
                  </span>
                </div>
                <div className="keywordHeadingSection2">
                  <span className="successText">
                    Status: Resume Approved
                    <FontAwesomeIcon icon={faCircle} className="approveEmoji" />
                  </span>
                </div>
              </div>
              {result.keywordsFound.map((keyword, index_2) => {
                return (
                  <div className="keywordsFound" key={index_2}>
                    <span className="keywordHeading">{keyword.keyword}:</span>
                    <span className="keywordSentence">{keyword.sentence}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div>
          {unacceptedFiles.length > 0 ? (
            <div>
              <h3>Files for Which No Keywords Were Found: </h3>
              {unacceptedFiles.map((file, index) => {
                return (
                  <div key={index} className="unaccaptedContainer">
                    <div className="unacceptedFileNames">{file.filename}</div>
                    <div className="resumeRejectedText">
                      Status: Resume Rejected
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="rejectEmoji"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
