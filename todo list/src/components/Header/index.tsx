import styles from './styles.module.css';
import rocket from '../../assets/rocket-icon.png'
import plus from '../../assets/layermore.png'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../Task';
import { Container } from '../Container';


export function Header() {
  const [ tasks, setTask] = useState([
    '',
  ])

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

  return (
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

      <div className={styles.conatinerTask}>
        {tasks.map(task => {
          return (
            <Task 
              content={task}
              onDeletTask={deletTask}
            />
          )
        })}
      </div>

    </div>
  )
}