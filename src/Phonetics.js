import React from "react";
import { FaMicrophone } from "react-icons/fa";

export default function Phonetic (props) {
    console.log(props.phonetic);
    return (
      <div className="Phonetics">
        {props.phonetic.text}
        <br />
        <br />
        <a href={props.phonetic.audio} target="_blank">
          <FaMicrophone className="Microphone-icon" size="1.3em" />
        </a>
      </div>
    );
}