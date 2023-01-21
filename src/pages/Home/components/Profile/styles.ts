import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileContainer = styled.section`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 90%;
  margin: -5rem auto 0;
  border-radius: 10px;

  .ProfileContent {
    padding: 2rem 2.5rem;

    img {
      width: 148px;
      height: 148px;
      object-fit: cover;
      border-radius: 8px;
      display: block;
      margin: 0 auto;
    }

    .ProfileData {
      display: flex;
      flex-direction: column;

      p {
        color: ${({ theme }) => theme['base-text']};
      }
    }

    .ProfileName {
      margin: 1rem 0;
      h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme['base-title']};
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.blue};
      }

      a span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: bold;
      }
    }

    .ProfileStatus {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: ${({ theme }) => theme['base-subtitle']};

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`

export const ProfileIcon = styled(FontAwesomeIcon)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme['base-label']};
`
