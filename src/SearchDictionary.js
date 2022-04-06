import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./SD.css";
//563492ad6f917000010000012e725cce854d43348a5c807973f891c1

export default function SearchDictionary() {
  let [KeyWord, SetKeyWord] = useState("");
  let [results, Setresults] = useState(null);

  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    Setresults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response.data[0]);
    setPhotos(response.data.photos);
  }

  function search(event) {
 
    ///https://dictionaryapi.dev/  -- documentation
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012e725cce854d43348a5c807973f891c1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${KeyWord}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  
 function handleSubmit(event) {
   event.preventDefault();
   search();
 }
  function handleKeyWordChange(event) {
    SetKeyWord(event.target.value);
  }

     return (
       <div className="SearchDictionary">
         <h2>Dictionary</h2>
         <form onSubmit={handleSubmit}>
           <input
             type="search"
             autoFocus={true}
             onChange={handleKeyWordChange}
           />
         </form>
         <Result results={results} />
         <Photos photos={photos} />
       </div>
     );
   
}
