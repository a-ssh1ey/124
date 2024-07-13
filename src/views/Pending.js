import React from "react";
import  Button  from "../components/Button/Button";
function Pending({setActive, selected}) {
    return (
        <div>
            <Button text="Back" inactive onclick={() => setActive(0)} disabled={selected === 0} secondary={true}/>
            <h1>Pending</h1>
        </div>
    );
}

export default Pending