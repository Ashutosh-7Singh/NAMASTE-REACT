 //how we can create aa h1 tag in react so in js we use document.createElement and in react we use react.createElement

 const heading=React.createElement(
  "h1"
  ,{id:"heading"},
  "Hello world from React!"
  );
  //React.createElement creates a (h1) element inside react
//  {} this tag or object is the place where we give attribute to the tags
// {id:"heading"} this gives id to the heading

 // we have to create root inside react for our react library
 const root=ReactDOM.createRoot(document.getElementById("root"))
 //now we have to render heading inside the root BY using root.render()
 root.render(heading);//root.render job is acutally to take this object and create that h1 tag that browsr understand and put it in heading