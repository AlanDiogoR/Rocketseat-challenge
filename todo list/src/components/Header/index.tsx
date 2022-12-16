import styles from './styles.module.css';
import rocket from '../../assets/rocket-icon.png'
import plus from '../../assets/layermore.png'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Container } from '../Container';
import { ConcluedTask } from '../ConcluedTask';
import { Task } from '../noTask';

interface taskProps {
  tasks: string[]
  setTask: () => void
}

export function Header() {
  const [ tasksCompleted, setTasksCompleted] = useState(0)
  const [ tasks, setTask] = useState<string[]>([])
  const inputElement = document.getElementById("input") as HTMLInputElement

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    setTask([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value) 
  }

  function handleNesTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
    event.target.setCustomValidity('');
  }

  function deletTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task != taskToDelete
    })
    setTask(tasksWithoutDeleteOne)
  }

  function concluedTask() {
    if (inputElement.checked) {
      alert(inputElement)
    }

  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <div>
            <img src={rocket} alt="" />
            <label>to<strong>do</strong></label>
          </div>
          <form onSubmit={handleCreateTask}>
            <input
              name='task'
              type="text"
              placeholder='Adcione uma nova tarefa'
              value={newTaskText}
              onChange={handleNewTaskChange}
              onInvalid={handleNesTaskInvalid}
              required
            />
            <button type='submit' disabled={newTaskText.length === 0}>
              Criar
              <img src={plus} alt="" />
            </button>
            </form>

        </header>

        <div>
          <Container
            tasks={tasks}
            conclued={tasksCompleted}
          />
        </div>

        <div className={styles.conatinerTask}>
          {tasks.length === 0 && <div><Task/></div>}
          {tasks.map(task => {
            return (
              <div>
                <ConcluedTask 
                  content={task}
                  onDeletTask={deletTask}
                  tasks={tasks}
                  onHandleConcluedTask={concluedTask}
                />

                
              </div>
        
            )
          })}
        </div>

      </div>
    </>  
  )
}

{/*document.getElementById("input").checked
 */}