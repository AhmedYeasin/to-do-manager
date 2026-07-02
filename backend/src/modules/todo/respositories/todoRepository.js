import { Todo } from "../models/todoModel.js"

export const createTodoRepository=()=>{
    return{
        create: async todoData=>{
            try{
                const todo = await Todo.create(todoData)
            } catch(error){
                console.error("Error creating todo")
            }
        }
    }
}