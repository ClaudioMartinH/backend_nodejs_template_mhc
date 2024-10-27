import { Task } from "../entities/entity";

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;
  saveTask(task: Task): Promise<void>;
  deleteTask(id: number): Promise<void>;
  updateTask(task: Task): Promise<void>;
  findTaskById(id: number): Promise<Task | undefined>;
}
