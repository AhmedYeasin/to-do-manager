export const todoService = () => {
    return {
        create: (todoData) => {
            try{
                // Logic to create a new todo item
            } catch(error){
                console.error("Error creating todo")
            }
        }
    }
}