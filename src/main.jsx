import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppXY from "./AppXY.jsx";
import AppMentor from "./AppMentor.jsx";
import AppMentors from "./AppMentors.jsx";
import AppMentorsImmer from "./AppMentorsImmer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppMentorsImmer />
    </React.StrictMode>
);
