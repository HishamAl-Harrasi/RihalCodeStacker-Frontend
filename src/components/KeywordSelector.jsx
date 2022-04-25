import React, { useState } from "react";
import "../styles/KeywordSelector.css";

export default function KeywordSelector() {
  const [inputField, setInputField] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (inputField.length === 0) {
      return;
    }

    setKeywords((keywords) => [...keywords, inputField]);
    // console.log(inputField);
    console.log(keywords);
    setInputField(() => "");
  };

  return (
    <div className="keywordSelector">
      <form>
        <label htmlFor="keywordInput" className="keywordLabel">
          Add Keywords to Search For:
        </label>
        <input
          type="submit"
          type="text"
          id="keywordInput"
          className="keywordInput"
          placeholder="Add Keyword Here.."
          onChange={(e) => setInputField(e.target.value)}
          value={inputField}
        />
        <button
          className="keywordButton"
          type="submit"
          onClick={(e) => handleAddKeyword(e)}
        >
          Add Keyword
        </button>
      </form>
    </div>
  );
}
