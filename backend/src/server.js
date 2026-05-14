import express from 'express';
import taskRoutes from './routes/taskSRoutes.js';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} with adress http://localhost:${PORT}`);
});
