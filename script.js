const v = "Hello World";

//React 17th Version:
// ReactDOM.render(v, document.getElementById("a"));

//React 18th Version:
const root = ReactDOM.createRoot(document.getElementById("a"));
root.render(v);
