import { useQuery } from 'react-query'
import { tabnewsApi } from '../../../../lib/api'
import { PostPreviewContainer } from './styles'
import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostPreviewProps {
  slug: string
}

interface PostType {
  body: string
  title: string
  created_at: Date
}

export function PostPreview({ slug }: PostPreviewProps) {
  const tenMinutesOnMiliseconds = 600000
  const { data } = useQuery(
    ['post', slug],
    async () => {
      const response = await tabnewsApi.get(`/contents/matheuspazinati/${slug}`)
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
        <span>
          {data?.created_at
            ? formatDistanceToNow(new Date(String(data?.created_at)), {
                addSuffix: true,
                locale: ptBR,
              })
            : ''}
        </span>
      </header>
      <ReactMarkdown className="Markdown">{data?.body!}</ReactMarkdown>
    </PostPreviewContainer>
  )
}
