import React, { useState } from 'react'

const Main = () => {
    const [color, setColor] = useState("");

    function colorBlue() {
        setColor("blue");
    }


    function colorPink() {
        setColor("pink");
    }
    
    return (
        <div>
            <div style={{ height: 200, width: 200, border: "1px solid black", background: color }}></div>
            <button onClick={() => colorBlue()}>blue</button>
            <button onClick={() => colorPink()}>pink</button>
        </div>
    )
}

export default Main
