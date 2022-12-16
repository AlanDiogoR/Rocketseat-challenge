import styles from './styles.module.css';
import rocket from '../../assets/rocket-icon.png'
import plus from '../../assets/layermore.png'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Container } from '../Container';
import { ConcluedTask } from '../ConcluedTask';

interface taskProps {
  tasks: string[]
  setTask: () => void
}
export function Header() {
  const [ tasksCompleted, setTasksCompleted] = useState(0)
  const [ tasks, setTask] = useState(['madioca'])

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

  function handleTaskConclued(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }
  function concluedTask() {
    if (document?.getElementById("input").checked) {
      setTasksCompleted(tasksCompleted+1)
    } else {
      setTasksCompleted(tasksCompleted-1)
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
          {tasks.map(task => {
            return (
              <ConcluedTask 
                content={task}
                onDeletTask={deletTask}
                tasks={tasks}
                onHandleConcluedTask={concluedTask}
              />
            )
          })}
        </div>

      </div>
    </>  
  )
}