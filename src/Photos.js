import React from "react";

export default function Photos (props){
    console.log(props.photos);
    if (props.photos){
 return (<section className="photos"> 
 <div className="row">
     {props.photos.map(function (photo, index) {
         return (
         
             <img
               src={photo.src.landscape}
               className="img-fluid"
               alt={photo.src.photographer}
             />
       
         );

     })}
      </div>
          
 </section>);




    } else {
        return null;
    }
   
}