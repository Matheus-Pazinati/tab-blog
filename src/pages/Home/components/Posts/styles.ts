import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: 90%;
  max-width: 864px;
  margin: 3rem auto 0;

  .Loading {
    display: block;
    width: 100%;
    margin-top: 1.5rem;

    span {
      margin: 0 auto;
    }
  }

  .Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  .PostSearch {
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    width: 100%;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border-color: ${({ theme }) => theme.blue};
    }
  }

  .PostsList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 864px;
    list-style: none;
    margin: 3.75rem 0;

    @media (min-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`
