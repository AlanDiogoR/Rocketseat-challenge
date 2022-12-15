import './styles.module.css';
import rocket from '../../assets/rocket-icon.png'
import plus from '../../assets/layermore.png'

export function Header() {
  return (
    <header>
      <div>
        <img src={rocket} alt="" />
        <label>to<strong>do</strong></label>
      </div> 

      <div>
        <input type="text" placeholder='Adcione uma nova tarefa'/>
        <button>
          Criar
          <img src={plus} alt="" />
        </button>
      </div>  
    </header>
  )
}