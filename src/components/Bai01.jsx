import { useState } from "react";

function Bai01(){
    const [name,changeName]=useState('none');
    const [input,changeInput]=useState('none');
    function handleChange(e){
        changeInput(e.target.value)
    }
    function handleClick(){
        changeName(input)
    }
    return(
        <>
            <input type="text" onChange={handleChange}></input>
            <br/>
            <button onClick={handleClick}>changeName</button>
            <p>{name}</p>
        </>
    )
}
export default Bai01;