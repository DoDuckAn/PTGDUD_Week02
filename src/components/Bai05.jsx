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
        let newList=[...taskList]
        newList.splice(index,1)
        setTaskList(newList)
    }
    return(
        <div style={{display:'flex',justifyContent:'top',alignItems:'center',flexDirection:'column', border:'1px solid black',width:600,minHeight:500,padding:10,backgroundColor:'lightblue'}}>
            <input onChange={handleChangeInput} type="text" placeholder="input task"></input>
            <br/>
            <button onClick={handleAdd}>Add task</button>
            <ul>
                {taskList.map((item,index)=>{
                    return(
                        <li key={index} style={{display:'flex',justifyContent:'space-between', alignItems:'center',width:200, borderRadius:5,backgroundColor:'white',margin:5,padding:5}}>
                            <span>{item}</span>
                            <button id={index} onClick={handleDelete}>x</button>
                        </li>
                    )
                })
                }
            </ul>
            
        </div>
    )
}
export default bai05;