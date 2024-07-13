import React from "react";
import  Footer from "../components/Footer/Footer";

function MainPage({setActive, selected}) {
    return (
        <div>
            <Footer setActive={setActive} selected={selected}></Footer>
        </div>
    );
}

export default MainPage