import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import { tabnewsApi } from '../../../../lib/api'
import { PostPreview } from '../PostPreview'
import { PostsContainer } from './styles'

interface PostType {
  slug: string
  parent_id: string | null
  title: string
  id: string
}

export function Posts() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchTabnewsPostPreview() {
    const response = await tabnewsApi.get(
      '/contents/matheuspazinati?per_page=100',
    )

    const data = response.data as PostType[]

    const posts = data.filter((data) => {
      return data.parent_id === null
    })

    setPosts(posts)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTabnewsPostPreview()
  }, [])

  return (
    <PostsContainer>
      <div className="Header">
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" className="PostSearch" />
      <div className="Loading">
        <RingLoader
          color="#AFC2D4"
          aria-label="Loading Spinner"
          loading={isLoading}
          size={150}
        />
      </div>
      <ul className="PostsList">
        {posts.map((post) => (
          <PostPreview slug={post.slug} key={post.id} />
        ))}
      </ul>
    </PostsContainer>
  )
}
