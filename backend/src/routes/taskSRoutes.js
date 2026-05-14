import express from 'express';
import { createTask, getAllTasks } from '../controllers/tasksControllers.js';
import { get } from 'mongoose';

const router = express.Router();
router.get("/", getAllTasks)
router.post("/", createTask)
router.put("/:id",)
router.delete("/:id",)
export default router;