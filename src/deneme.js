import React from "react";




  
function Kitap (props) {

    const {img,yazar,saatis,paragraf} = props.kitap;
    const clickHandler = ()=>{
        alert("Buton basildi!")
    }
    return (
      <div className="book" onMouseOver={()=>{
          console.log(yazar)
      }}>
         <img src={img} alt="" />
         <h1>{yazar}</h1>
         <h4>{saatis}</h4>
         <p>{paragraf}</p>
         <button type="button" onClick={clickHandler} > Button </button>
      </div>
    )
  }

export default Kitap;