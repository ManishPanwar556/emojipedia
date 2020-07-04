import React from "react";
import Details from "./Details";
import emojipedia from "../emojipedia";
function Add(props){
  return (<Details
          key={props.id}
          name={props.name}
          emoji={props.emoji}
          meaning={props.meaning} />);
}
function App(){
  return (<div>
       <h1>
         emojipedia
       </h1>
       <dl className="dictionary">
         {emojipedia.map(Add)}
         </dl>
     </div>
  );
}
export default App;
