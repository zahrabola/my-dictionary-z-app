import React from "react";


export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                <strong>Synonyms: </strong> 
                  "{synonym}"
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
