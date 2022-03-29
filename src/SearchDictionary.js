import React, { useState } from "react";
import "./SD.css";
export default function SearchDictionary() {
  let [KeyWord, SetKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${KeyWord} definition`);
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
