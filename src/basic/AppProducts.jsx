import { useMemo, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar.jsx";
import Counter from "./components/Counter.jsx";
import Profile from "./components/Profile.jsx";
import Products from "./components/Products.jsx";

function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div className='container'>
            {showProducts && <Products />}
            <button onClick={() => setShowProducts(show => !show)}>Toggle</button>
        </div>
    );
}

export default AppProducts;
