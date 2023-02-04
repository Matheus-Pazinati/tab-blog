import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'

import { TitleContainer } from './styles'

export function Title() {
  return (
    <TitleContainer>
      <div className="TitleContent">
        <nav>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Ver no Tabnews
          </a>
        </nav>
        <h2 title="Título da postagem">
          JavaScript data types and data structures
        </h2>
        <ul>
          <li title="Usuário Tabnews">
            <FontAwesomeIcon icon={faWindowMaximize} />
            matheuspazinati
          </li>
          <li title="Data da postagem">
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li title="Comentários">
            <FontAwesomeIcon icon={faComment} />
            10 comentários
          </li>
        </ul>
      </div>
    </TitleContainer>
  )
}
