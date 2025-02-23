import { useState } from "react";

function bai05(){
    const [taskName,changeTaskName]=useState('')
    const [taskList,setTaskList]=useState([])
    function handleChangeInput(e){
        changeTaskName(e.target.value)
    }
    function handleAdd(){
        setTaskList([...taskList,taskName])
    }
    function handleDelete(e){
        let index=parseInt(e.target.id)
        setTaskList(taskList.splice(index,1))
        console.log(index)
    }
    return(
        <>
            <input onChange={handleChangeInput} type="text" placeholder="input task"></input>
            <br/>
            <ul>
                {taskList.map((item,index)=>{
                    return(
                        <li key={index}>
                            <span>{item}</span>
                            <button id={index} onClick={handleDelete}>x</button>
                        </li>
                    )
                })
                }
            </ul>
            <button onClick={handleAdd}>Add task</button>
        </>
    )
}
export default bai05;