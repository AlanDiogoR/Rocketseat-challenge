import styles from './styles.module.css';
import clipBoard from '../../assets/Clipboard.png'

export function Task() {
  return (
    <div className={styles.tasks}>
      <img src={clipBoard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}