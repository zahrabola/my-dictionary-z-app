import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./SD.css";

export default function SearchDictionary() {
  let [KeyWord, SetKeyWord] = useState("");
  let [results, Setresults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    Setresults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    ///https://dictionaryapi.dev/  -- documentation
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    SetKeyWord(event.target.value);
  }
  return (
    <div className="SearchDictionary">
      <h2>Dictionary</h2>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
      </form>
      <Result results={results} />
    </div>
  );
}
