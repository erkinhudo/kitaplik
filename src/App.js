import React from "react";
import Kitap from "./deneme";
import {kitaplar} from "./kitaplar";



function App() {

  return (
     <div className="booklist"> 
           {kitaplar.map((kit)=>{
             return (
              <Kitap key={kit.id} kitap={kit}/>
             )
           })}
      </div>
  );
}

 

export default App;
