import './styles.module.css';
import rocket from '../../assets/rocket-icon.png'
import plus from '../../assets/layermore.png'
import { ChangeEvent, FormEvent, useState } from 'react';


export function Header() {
  return (
    <header>
      <div>
        <img src={rocket} alt="" />
        <label>to<strong>do</strong></label>
      </div> 

      <form action="">  
        <input 
          name='task'
          type="text" 
          placeholder='Adcione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <img src={plus} alt="" />
        </button>
        </form>  
    </header>
  )
}