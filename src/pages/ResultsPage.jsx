import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/ResultsPage.css";

export default function ResultsPage(props) {
  return (
    <div className="resultsPageContainer">
      <div className="resultsHeading">
        <h1>Analysis Results</h1>
        <hr className="titleLine" />
      </div>
      <div>
        {props.data.map((result, index) => {
          return (
            <div className="mainResultsDataContainer">
              <div className="keywordHeading">
                <div className="keywordHeadingSection1">
                  <span className="resultsFilename" key={index}>
                    {result.filename}
                  </span>
                  <span className="keywordMatches">
                    Keywords Found: {result.keywordsFound.length}
                  </span>
                </div>
                <div className="keywordHeadingSection2">
                  <span className="successText">
                    Status: Resume Passed
                    <FontAwesomeIcon icon={faCircle} className="successEmoji" />
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
      </div>
    </div>
  );
}
