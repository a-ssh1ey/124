import  Button  from "../components/Button/Button";
import React from "react";

function Join({setActive, selected}) {
    return (
        <div>
            <Button text="Back" inactive onclick={() => setActive(0)} disabled={selected === 0} secondary={true}/>
            <h1>Join</h1>

        </div>
    );
}

export default Join