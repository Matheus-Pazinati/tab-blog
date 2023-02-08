import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faCoins,
} from '@fortawesome/free-solid-svg-icons'

import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'

import { TitleContainer } from './styles'

import { Link } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostProps {
  created_at: Date
  owner_username: string
  children_deep_count: number
  tab_link: string
  slug: string
  title: string
  tabcoins: number
}

interface TitleProps {
  postData: PostProps
}

export function Title({ postData }: TitleProps) {
  return (
    <TitleContainer>
      <div className="TitleContent">
        <nav>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a
            href={`https://www.tabnews.com.br/${postData.owner_username}/${postData.slug}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Ver no Tabnews
          </a>
        </nav>
        <h2 title="Título da postagem">{postData.title}</h2>
        <ul>
          <li title="Usuário Tabnews">
            <FontAwesomeIcon icon={faWindowMaximize} />
            {postData.owner_username}
          </li>
          <li title="Data da postagem">
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(new Date(postData.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </li>
          <li title="Tabcoins">
            <FontAwesomeIcon icon={faCoins} />
            {postData.tabcoins > 1
              ? `${postData.tabcoins} Tabcoins`
              : `${postData.tabcoins} Tabcoin`}
          </li>
          <li title="Comentários">
            <FontAwesomeIcon icon={faComment} />
            {postData.children_deep_count} comentários
          </li>
        </ul>
      </div>
    </TitleContainer>
  )
}
