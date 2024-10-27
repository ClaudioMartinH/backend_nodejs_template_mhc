export class Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
  constructor(id: number, title: string, priority: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }
  setPriority(priority: string) {
    this.priority = priority;
  }
  toggleCompletion() {
    this.completed = !this.completed;
  }
  static fromJSON(json: any): Task {
    return new Task(json.id, json.title, json.priority, json.completed);
  }
  static fromArray(arr: any[]): Task[] {
    return arr.map(Task.fromJSON);
  }
  static findById(tasks: Task[], id: number): Task | undefined {
    return tasks.find((task) => task.id === id);
  }
  static sortTasksByPriority(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => (a.priority > b.priority ? -1 : 1));
  }
}
