import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { tabnewsApi } from '../../lib/api'
import { Body } from './components/Body'
import { Title } from './components/Title'

interface PostTypes {
  created_at: Date
  owner_username: string
  children_deep_count: number
  tab_link: string
  title: string
  slug: string
  tabcoins: number
  body: string
}

export function Post() {
  const { postSlug } = useParams()
  const fiveMinutesOnMiliseconds = 300000

  const { data, isSuccess } = useQuery(
    ['post', postSlug],
    async () => {
      const response = await tabnewsApi.get(
        `/contents/matheuspazinati/${postSlug}`,
      )
      return response.data as PostTypes
    },
    {
      staleTime: fiveMinutesOnMiliseconds,
    },
  )

  return (
    <main>
      {isSuccess && (
        <>
          <Title postData={data} />
          <Body />
        </>
      )}
    </main>
  )
}
