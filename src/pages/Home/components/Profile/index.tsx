import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <section>
      <div>
        <img
          src="https://rollingstone.uol.com.br/media/_versions/keanu_reeves_como_neo_em_matrix_divulgacao_widelg.jpg"
          alt=""
        />
        <div>
          <div>
            <h1>Matheus Pazinati</h1>
            <a
              href="https://www.github.com/Matheus-Pazinati"
              target={'_blank'}
              rel="noreferrer"
            >
              <span>
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            temporibus? Officiis expedita magni quisquam qui. Nam, minima
            molestias excepturi ducimus officia, natus tempore praesentium quis
            nihil aliquam consectetur velit quaerat!
          </p>
          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              Matheus-Pazinati
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              30 seguidores
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
