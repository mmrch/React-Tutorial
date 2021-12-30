import React from "react";
import ReactDOM from "react-dom";
import Name from "./component1";

function Main(){
  return(
  ReactDOM.render( <Name today={new Date()}/>,
    document.getElementById("root"))
  );
}

setInterval(Main,1000)