import React from "react";
import "./Photos.css";


export default function Photos (props){
 
    if (props.photos){
 return (
   <section className="Photos">
     <div className="row">
       <h2> Images</h2>
       {props.photos.map(function (photo, index) {
         return (
           <div className="dict-img" key={index}>
             <a href={photo.src.original} target="_blank" rel="noreferrer">
               <img
                 src={photo.src.landscape}
                 className="img-fluid"
                 alt={photo.src.photographer}
               />
             </a>
           </div>
         );
       })}
     </div>
   </section>
 );

    } else {
        return null;
    }
   
}