import styles from './styles.module.css';
import lixeira from '../../assets/Vector.png'

export function Task() {
  return (
    <div className={styles.tasks}>
      <div className={styles.assignment}>
        <input type="radio" name="tarefaCompletada"/>
        <label>Limpar a casa</label>
        <button><img src={lixeira} alt="" /></button>
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