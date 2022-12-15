import styles from './styles.module.css';
import lixeira from '../../assets/Vector.png'

interface taskProps {
  content: string
  onDeletTask: (task: string) => void
}

export function Task({ content, onDeletTask }:taskProps) {
  function handleDeleteTask() {
    onDeletTask(content)
  }
  return (
    <div className={styles.tasks}>
      <div className={styles.assignment}>
        <input type="checkbox" name="tarefaCompletada"/>
        <label>{content}</label>
        <button onClick={handleDeleteTask} title='Deletar tarefa'><img src={lixeira} alt="" /></button>
      </div>
    </div>
  )
}

{/*import clipBoard from '../../assets/Clipboard.png'

export function Task() {
  return (
    <div className={styles.tasks}>
      <img src={clipBoard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}*/}