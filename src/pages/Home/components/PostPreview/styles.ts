import styled from 'styled-components'

export const PostPreviewContainer = styled.li`
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  width: 90vw;

  @media (min-width: 850px) {
    max-width: 416px;
  }

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 850px) {
      flex-direction: row;
      align-items: flex-start;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};

      @media (min-width: 850px) {
        width: 75%;
      }
    }
    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
      padding-top: 2px;
    }
  }

  .Markdown {
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.5625rem;
    margin-top: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
