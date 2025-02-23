import { useState } from "react";

function Bai02(){
    const [a,changeA]=useState(0)
    const [b,changeB]=useState(0)
    const [operation,changeOperation]=useState('+')
    const [result,changeResult]=useState(0)
    function handleChangeA(e){
        changeA(parseInt(e.target.value))
    }
    function handleChangeB(e){
        changeB(parseInt(e.target.value))
    }
    function handleChangeOpe(e){
        changeOperation(e.target.value)
    }
    function Calculate(){
        switch (operation) {
            case '+':
                changeResult(a+b)
                break;
            case '-':
                changeResult(a-b)
                break;
            case '*':
                changeResult(a*b)
                break;
            case '/':
                changeResult(a/b)
                break;
            default:
                break;
        }
    }
    return(
        <>
            <input type="text" placeholder="input a" onChange={handleChangeA}></input>
            <br/>
            <input type="text" placeholder="input b" onChange={handleChangeB}></input>
            <br/>
            <input type="radio" name="operation" value={"+"} onChange={handleChangeOpe}/>
            <>+</>
            <input type="radio" name="operation" value={"-"} onChange={handleChangeOpe}/>
            <>-</>
            <input type="radio" name="operation" value={"*"} onChange={handleChangeOpe}/>
            <>*</>
            <input type="radio" name="operation" value={"/"} onChange={handleChangeOpe}/>
            <>/</>
            <br/>
            <button onClick={Calculate}>calculate</button>
            <p>Result: {result}</p>
        </>
    )
}
export default Bai02;