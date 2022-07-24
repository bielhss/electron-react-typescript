import React, { useState } from "react"
import { ITask } from "../../Interfaces/taskInterface"
import { findOneTask } from "../../controllers/taskController"
import './styles.scss'
 
export const AddTask = ({tempId,settempId, CreateTask, UpdateTask, ExcludeTask}: any) =>{

    const [taskId, setTaskId] = useState<string>(``)
    const [taskName, setTaskName] = useState<string>(``)


function clear(){
    setTaskId(``)
    setTaskName(``)
}


const submitTask = async (taskName:string) => {
    if(taskName!==``){
    if(taskId === ``){
        await CreateTask(taskName)
        clear()
    }
    }else{
        await UpdateTask(taskId, taskName)
        clear()
    }
}

const selectionTask = (id: string) => {
        findOneTask(id).then(Task => {
        setTaskId(id)
        setTaskName(Task!.taskName)
        settempId(``)
    })       
}

const excludeTask = async (id: string) => {
    await ExcludeTask(id)
    clear()        
}

return(
    <div className="card">
       {tempId !== `` ? (selectionTask(tempId)) : settempId(``)} 
       <div>
            <text>Nome:</text>
            <input type="text" placeholder="Nome da task" value={taskName} onChange={(event) => { setTaskName(event.target.value)}} />
        </div>
        <div>
                <button onClick={() => submitTask(taskName)}>Salvar</button>
                <button onClick={() => excludeTask(taskId)}>Excluir</button>
        </div> 
    </div>

)

}