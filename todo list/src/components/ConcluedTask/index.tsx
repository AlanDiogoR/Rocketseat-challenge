import styles from './styles.module.css'
import lixeira from '../../assets/Vector.png'
import { ChangeEvent } from 'react'
import { TaskItem } from '../../lib/tasks'

interface taskProps {
  task: TaskItem
  onDeletTask: (id: string) => void
  onHandleConcluedTask: (id: string, checked: boolean) => void
}

export function ConcluedTask({ task, onDeletTask, onHandleConcluedTask }:taskProps) {
  function handleDeleteTask() {
    onDeletTask(task.id)
  }

  function handleConcluedTask(event: ChangeEvent<HTMLInputElement>) {
    onHandleConcluedTask(task.id, event.target.checked)
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.assignment}>
        <input 
          type="checkbox" 
          id={`task-${task.id}`}
          checked={task.done}
          onChange={handleConcluedTask}
        />
        <label htmlFor={`task-${task.id}`}>{task.title}</label>
        <button onClick={handleDeleteTask} title='Deletar tarefa'><img src={lixeira} alt="" /></button>
      </div>
    </div>
  )
}
