import React, { useState } from 'react'

const Main = () => {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }
   

    // function colorPink() {
    //     setColor("pink");
    // }
    
    return (
        <div>
            <div style={{ height: 200, width: 200, border: "1px solid black",backgroundColor:active ? "yellow" : "red"}}></div>
            {/* <button onClick={() => colorBlue()}>blue</button> */}
             <button onClick={()=>handleClick()}>Toggle</button>
            {/* <button onClick={() => colorPink()}>pink</button> */}
        </div>
    )
}

export default Main
