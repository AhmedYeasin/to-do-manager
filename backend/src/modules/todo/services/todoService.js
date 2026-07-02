import { createTodoRepository } from "../respositories/todoRepository.js"

export const todoService = () => {
    return {
        // Logic to create a new todo item
        create: async (todoData) => {
            try {
                return await createTodoRepository.create(todoData)
            } catch (error) {
                console.error("Error creating todo")
            }
        }
    }
}