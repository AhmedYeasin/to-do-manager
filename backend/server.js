import { app } from "./src/app.js";
import { connectDB } from "./src/config/db.js";



const port = process.env.PORT || 4000;

const startServer = async () => {
    await connectDB()

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })

}

try{
    await startServer();
} catch (error){
    console.error('failed to start server:', error)
}
