import styles from './styles.module.css'

export function Container() {
  return (
    <main>
      <div className={styles.nav}>
        <div>
          <a href="#SLA">Tarefas criadas</a>
          <span>0</span>
        </div>

        <div>
          <a href="#SLA"><strong className={styles.stron}>Concluídas</strong></a>
          <span>0</span>
        </div>
      </div>
    </main>
  )
}