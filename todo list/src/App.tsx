import { Container } from './components/Container'
import { Header } from './components/Header'
import { Task } from './components/Task'
//import clipBoard from './assets/Clipboard.png'
import './global.css'


interface taskProps {
  task: string;
  conclued: boolean;
}
export function App({ task, conclued}:taskProps) {

  return (
    <>
      <Header/>
      <Container/>
      {/*<div className={styles.tasks}>
        <img src={clipBoard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
  </div>*/}
      <Task/>
      
    </>
  )
}

