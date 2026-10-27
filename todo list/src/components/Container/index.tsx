import styles from './styles.module.css'
import { TaskItem } from '../../lib/tasks'

interface TaskProps {
  tasks: TaskItem[]
  conclued: number
}

export function Container( { tasks, conclued}:TaskProps) {
  const createTask = tasks.length
  return (
    <main>
      <div className={styles.nav}>
        <div>
          <a href="#SLA">Tarefas criadas</a>
          <span>{createTask}</span>
        </div>

        <div>
          <a href="#SLA"><strong className={styles.stron}>Concluídas</strong></a>
          <span>{conclued}</span>
        </div>
      </div>
    </main>
  )
}