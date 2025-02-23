import { useState } from "react";

function Bai03(){
    const [a,changeA]=useState(0)
    const [b,changeB]=useState(0)
    const [result,changeResult]=useState(0)
    function handleChangeA(e){
        changeA(parseInt(e.target.value))
    }
    function handleChangeB(e){
        changeB(parseInt(e.target.value))
    }
    function Calculate(){
        changeResult(a+b)
    }
    return(
        <>
            <input type="text" placeholder="input a" onChange={handleChangeA}></input>
            <br/>
            <input type="text" placeholder="input b" onChange={handleChangeB}></input>
            <br/>
            <br/>
            <button onClick={Calculate}>calculate</button>
            <p>Result: {result}</p>
        </>
    )
}
export default Bai03;