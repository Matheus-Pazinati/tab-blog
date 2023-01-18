import logoImg from '../../assets/images/tab-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logotipo Tab-Blog" />
    </HeaderContainer>
  )
}
