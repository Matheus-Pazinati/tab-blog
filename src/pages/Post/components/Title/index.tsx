import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
        <h2>JavaScript data types and data structures</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Matheus-Pazinati
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            10 comentários
          </li>
        </ul>
      </div>
    </TitleContainer>
  )
}
