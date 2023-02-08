import { BodyContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface BodyProps {
  body: string
}

export function Body({ body }: BodyProps) {
  return (
    <BodyContainer>
      <ReactMarkdown className="PostBody">{body}</ReactMarkdown>
    </BodyContainer>
  )
}
