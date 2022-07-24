import { connectDb, disconnectDb } from "../database/databaseMongo"
import { ObjectId } from "mongodb"
import { ITask} from "../Interfaces/taskInterface"

export const create = async (data: ITask) => {
  const newTask = (await connectDb()).collection(`tasktList`).insertOne(data)
  disconnectDb()
  return newTask
}

export const findAll = async () => {
  const taskList = (await connectDb()).collection(`taskList`).find({}).toArray()
  disconnectDb()
  return taskList
}

export const findOne = async (id: string) => {
  const task = (await connectDb()).collection(`taskList`).findOne({ _id: new ObjectId(id) })
  disconnectDb()
  return task
}

export const update = async (id: string, task: ITask) => {
  const updateTask = (await connectDb()).collection(`taskList`).updateOne({ _id: new ObjectId(id) }, { $set: task })
  return updateTask
}

export const exclude = async (id: string) => {
  const excludeTask = (await connectDb()).collection(`taskList`).deleteOne({ _id: id })
  return excludeTask
}