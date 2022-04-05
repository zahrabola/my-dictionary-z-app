import React from "react";
import { FaMicrophone } from "react-icons/fa";

export default function Phonetic (props) {
    console.log(props.phonetic);
    return (
      <div className="Phonetics">
        <span className="text-pho"> {props.phonetic.text} </span>
        <br />
        <br />
        <a href={props.phonetic.audio} >
          <FaMicrophone className="Microphone-icon" size="1.3em" />
        </a>
      </div>
    );
}
