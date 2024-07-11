import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

function App() {
  return (
    <div className="container">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <div className="img-wrapper">
        <img src="./IMG_2183.JPG" alt="myPhoto" className="photo" />
      </div>
      <h3 className="name">Ivan Cherkes</h3>
      <p className="myself">
        Young software engineer. Student at Atlantic Technological University.
        In my spare time from studying like to work out, boxing, running and
        traveling. Enjoying and exploring the life. :)
      </p>
      <div className="skills">
        <div className="html">HTML+CSS🐽</div>
        <div className="javascript">JavaScript</div>
        <div className="java">Java</div>
        <div className="react">React</div>
        <div className="software">Software Development</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
