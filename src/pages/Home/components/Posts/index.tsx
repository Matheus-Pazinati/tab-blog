import { PostPreview } from '../PostPreview'
import { PostsContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <div className="Header">
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" className="PostSearch" />
      <ul className="PostsList">
        <PostPreview />
        <PostPreview />
      </ul>
    </PostsContainer>
  )
}
