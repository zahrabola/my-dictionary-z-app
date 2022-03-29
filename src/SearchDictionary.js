import React, { useState } from "react";
import axios from "axios";
import "./SD.css";
export default function SearchDictionary() {
  let [KeyWord, SetKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    ///https://dictionaryapi.dev/  -- documentation
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    SetKeyWord(event.target.value);
  }
  return (
    <div className="SearchDictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
