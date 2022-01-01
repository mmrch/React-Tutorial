import React from "react";
import ReactDOM from "react-dom";
import Name from "./component1";

function Main(){
  return(
  ReactDOM.render( <Name/>,
    document.getElementById("root"))
  );
}

setInterval(Main,1000)