import React from "react";
import  Footer from "../components/Footer/Footer";

function MainPage({setActive, selected}) {
    return (
        <div>
            <h1>Main Page</h1>
            <Footer setActive={setActive} selected={selected}></Footer>
        </div>
    );
}

export default MainPage