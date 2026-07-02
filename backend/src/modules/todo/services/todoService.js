import { createTodoRepository } from "../respositories/todoRepository.js"

export const createTodoService = (todoRepository = createTodoRepository()) => {
    return {
        // Logic to create a new todo item
        create: async (todoData) => {
            try {
                return await todoRepository.create(todoData)
            } catch (error) {
                console.error("Error creating todo")
            }
        }
    }
}