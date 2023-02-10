import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { MoonLoader } from 'react-spinners'
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
  const [searchText, setSearchText] = useState('')
  const { data, isLoading, error } = useQuery('posts', async () => {
    try {
      const response = await tabnewsApi.get(
        '/contents/matheuspazinati?per_page=100',
      )

      const responseData = response.data as PostType[]

      const posts = responseData.filter((data) => {
        return data.parent_id === null
      })

      return posts
    } catch (_) {
      console.log(error)
    }
  })

  function handleSearchPost(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  const filteredPostsBySearch = data?.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <PostsContainer>
      <div className="Header">
        <h2>Publicações</h2>
        <span>{data?.length} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="PostSearch"
        onChange={(event) => handleSearchPost(event)}
      />
      <div className="Loading">
        <MoonLoader
          color="#AFC2D4"
          aria-label="Loading Spinner"
          loading={isLoading}
          size={150}
        />
      </div>
      <ul className="PostsList">
        {filteredPostsBySearch?.map((post) => (
          <PostPreview slug={post.slug} key={post.id} />
        ))}
      </ul>
    </PostsContainer>
  )
}
