import styled from 'styled-components'

export const TitleContainer = styled.section`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 90%;
  max-width: 864px;
  margin: -5rem auto 0;
  border-radius: 10px;

  .TitleContent {
    padding: 2rem 2.5rem;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        font-size: 0.75rem;
        font-weight: 700;
        color: ${({ theme }) => theme.blue};
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
      margin: 1.25rem 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        list-style: none;
        color: ${({ theme }) => theme['base-span']};
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`
