import { HeaderContainer } from "./style";
import logo from '../assets/Logo.png';
import { MapPin, ShoppingCart } from "phosphor-react"


export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Copo de café escrito Coffee delivery" />
      </div>

      <div>
        <div>
          <MapPin/>
          <span>Porto Alegre</span>
          </div>
        <div>
          <ShoppingCart/>
        </div>
      </div>
    </HeaderContainer>
  )
}