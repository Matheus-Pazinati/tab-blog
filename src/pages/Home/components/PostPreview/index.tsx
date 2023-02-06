import { useQuery } from 'react-query'
import { tabnewsApi } from '../../../../lib/api'
import { PostPreviewContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostPreviewProps {
  slug: string
}

interface PostType {
  body: string
  title: string
}

export function PostPreview({ slug }: PostPreviewProps) {
  const tenMinutesOnMiliseconds = 600000
  const { data } = useQuery(
    ['post', slug],
    async () => {
      const response = await tabnewsApi.get(`/contents/matheuspazinati/${slug}`)
      console.log(response.data)
      return response.data as PostType
    },
    {
      staleTime: tenMinutesOnMiliseconds,
    },
  )

  return (
    <PostPreviewContainer>
      <header>
        <h3>{data?.title}</h3>
        <span>Há 1 dia</span>
      </header>
      <ReactMarkdown className="Markdown">{data?.body!}</ReactMarkdown>
    </PostPreviewContainer>
  )
}
