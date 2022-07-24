import { create,findAll,findOne, update, exclude } from "../services/taskService"
import { ITask} from "../Interfaces/taskInterface"

export const createTask = (task: ITask) => {
  return create(task)
}

export const updateTask = (id: string, task: ITask) => {
  return update(id, task)
}
export const findOneTask = (id: string) => {
    return findOne(id)
  }
export const findAllTask = () => {
    return findAll()
  }

export const excludeTask = (id: string) => {
  return exclude(id)
}