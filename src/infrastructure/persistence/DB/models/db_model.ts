import mongoose, { Schema } from "mongoose";

const defaultSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", defaultSchema);

export default Task;
