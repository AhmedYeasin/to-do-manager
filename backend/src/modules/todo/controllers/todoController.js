import { http_status } from "../../../shared/constants.js";
import { ApiResponse } from "../../../utils/apiResponse.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { createTodoService, todoService } from "../services/todoService.js";


const todoService = createTodoService()
export const createTodo = asyncHandler(async (req, res)=>{
  const todo = await todoService.create(req.body)
  new ApiResponse(http_status.created, todo, 'Todo created successfully').send(res)
})