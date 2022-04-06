import React from "react";

export default function Photos (props){
    console.log(props.photos);
    if (props.photos){
 return " hello photos";
    } else {
        return null;
    }
   
}