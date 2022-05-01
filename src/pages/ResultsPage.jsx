import React from "react";
import "../styles/ResultsPage.css";

export default function ResultsPage(props) {
  // console.log(props.data[0].filename);
  return (
    <div className="resultsPageContainer">
      <div>
        {props.data.map((result) => {
          return <h1>{result.filename}</h1>;
        })}
      </div>
    </div>
  );
}
