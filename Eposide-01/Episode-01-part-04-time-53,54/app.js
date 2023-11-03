/*
*
*
*  <div id="parent">
*       <div id="child">
*           <h1>i'm H1 tag</h1>.
*           <h2>im h2 tag</h2>
*       </div>
<div id="child2">
*           <h1>i'm H1 tag</h1>.
*           <h2>im h2 tag</h2>
*       </div>
*  </div>
*
*ReactElement(object)=>HTML(Browser Understand)
*/

const parent=React.createElement(
  "div",
  {id:"parent"},
  [
  React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"i'm H1 tag"),
      React.createElement("h2",{},"i'm H2 tag"),
    ]),
  React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"i'm H1 tag"),
      React.createElement("h2",{},"i'm H2 tag"),
    ])]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


