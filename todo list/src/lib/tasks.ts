export interface TaskItem {
  id: string
  title: string
  done: boolean
}

export function createTask(title: string): TaskItem {
  return { id: crypto.randomUUID(), title, done: false }
}

export function addTask(tasks: TaskItem[], title: string): TaskItem[] {
  return [...tasks, createTask(title)]
}

export function removeTask(tasks: TaskItem[], id: string): TaskItem[] {
  return tasks.filter(task => task.id !== id)
}

export function toggleTask(tasks: TaskItem[], id: string, done: boolean): TaskItem[] {
  return tasks.map(task => (task.id === id ? { ...task, done } : task))
}

export function countDone(tasks: TaskItem[]): number {
  return tasks.filter(task => task.done).length
}
