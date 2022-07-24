import React, { useEffect, useState } from "react"

import { AddTask } from "../../components/AddTask"
import { TaskList } from "../../components/TaskList"
import { createTask, excludeTask, findAllTask, updateTask } from "../../controllers/taskController"

import './App.module.scss'

export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])
  const [tempId, setTempId] = useState<string>(``)

  const listTasks =async () => {
    await findAllTask().then((data) =>{
      setTaskList({...data})
    })
    
  }

  useEffect(() =>{
    listTasks()
  },[])

  const CreateTask = async(taskName: string) => {
    const task = { "taskName" : taskName}
    await createTask(task)
    await listTasks()
  }

  const UpdateTask = async(taskId: string, taskName: string) => {
    const task = {"taskName": taskName}
    await updateTask(taskId, task)
    await listTasks()
  }

  const ExcludeTask = async(taskId: string) => {
    await excludeTask(taskId)
    await listTasks()
  }

  const Selection = async(id: string) => {
    setTempId(id)
    await listTasks()
  }

  return (
    <h1>Lista de Tarefas</h1>

    <div ="app">
      <p>Adicionar uma Task</p>
      <TaskList taskList = {taskList} Selection={Selection}/>
    </div>
    <div>
      <p>Lista de Cadastros</p>
      <AddTask tempId={infoId} setTempId={setTempId} CreateTask={CreateTask} UpdateTask={UpdateTask} ExcludeTask={ExcludeTask}/>
    </div>
}
