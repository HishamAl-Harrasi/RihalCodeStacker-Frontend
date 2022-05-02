import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/KeywordSelector.css";

export default function KeywordSelector(props) {
  const [inputField, setInputField] = useState("");

  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (inputField.length === 0) {
      return;
    }

    // Input validation and checks
    let lowerCasedKeywords = props.keywords.map((keyword) =>
      keyword.toLowerCase()
    );

    if (lowerCasedKeywords.includes(inputField.toLowerCase())) {
      props.setErrorMessage("* Keyword already set..");
    }

    if (props.keywords.length <= 4) {
      if (!lowerCasedKeywords.includes(inputField.toLowerCase())) {
        props.setErrorMessage("");
        props.setKeywords([...props.keywords, inputField]);
        setInputField(() => "");
      }
    } else {
      props.setErrorMessage("* A maximum of 5 keywords is allowed..");
    }
  };

  const handleDeleteKeyword = (keywordIndex) => {
    props.keywords.splice(keywordIndex, 1);
    props.setKeywords([...props.keywords]);
  };

  return (
    <div className="keywordSelector">
      <form>
        <div className="searchFieldContainer">
          <label htmlFor="keywordInput" className="keywordLabel">
            Enter Keywords to Search For:
          </label>
          <input
            type="submit"
            type="text"
            id="keywordInput"
            className="keywordInput"
            placeholder="Type Keyword Here.."
            onChange={(e) => setInputField(e.target.value)}
            value={inputField}
          />
          <div className="button-container">
            <button
              className="keywordButton"
              type="submit"
              onClick={(e) => handleAddKeyword(e)}
            >
              Add Keyword
            </button>
          </div>
        </div>
        <div className="keywordContainer">
          {props.keywords.map((keyword, index) => (
            <div
              className="keyword"
              onClick={() => handleDeleteKeyword(index)}
              key={index}
            >
              {keyword}{" "}
              <FontAwesomeIcon icon={faXmark} className="fa-1x trashEmoji" />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
