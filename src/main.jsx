import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProfile from "./AppProfile.jsx";
import AppCounter from "./AppCounter.jsx";
import AppProducts from "./AppProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProducts />
    </React.StrictMode>
);
