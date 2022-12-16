import styles from './styles.module.css'
import clipBoard from '../../assets/Clipboard.png'
import lixeira from '../../assets/Vector.png'
import { useState } from 'react'

interface taskProps {
  content: string
  tasks: string[]
  onDeletTask: (task: string) => void
  onHandleConcluedTask: () => void
}

export function ConcluedTask({ content, onDeletTask, tasks, onHandleConcluedTask }:taskProps) {
  function handleDeleteTask() {
    onDeletTask(content)
  }

  function handleConcluedTask() {
    onHandleConcluedTask()
  } 


  return (
    <div className={styles.tasks}>
      <div className={styles.assignment}>
        <input 
          type="checkbox" 
          onChange={handleConcluedTask}
          id='input'
        />
        <label>{content}</label>
        <button onClick={handleDeleteTask} title='Deletar tarefa'><img src={lixeira} alt="" /></button>
      </div>
    </div>
  )
}