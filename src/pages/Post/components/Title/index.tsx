import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Title() {
  return (
    <section>
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
      <div>
        <p>
          <FontAwesomeIcon icon={faGithub} />
          Matheus-Pazinati
        </p>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </span>
        <p>
          <FontAwesomeIcon icon={faComment} />
          10 comentários
        </p>
      </div>
    </section>
  )
}
