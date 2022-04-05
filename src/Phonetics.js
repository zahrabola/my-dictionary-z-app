import React from "react";
import { FaMicrophone } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic (props) {
    console.log(props.phonetic);
    return (
      <div className="Phonetics">
        <span className="text-pho"> {props.phonetic.text} </span>
        <br />
        <br />
        <a href={props.phonetic.audio} >
          <FaMicrophone className="Microphone-icon" size="2.5em" />
        </a>
      </div>
    );
}
