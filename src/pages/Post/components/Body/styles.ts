import styled from 'styled-components'

export const BodyContainer = styled.section`
  padding: 0 0.75rem;
  width: 90%;
  max-width: 864px;
  margin: 3.75rem auto;

  @media (min-width: 850px) {
    padding: 0 2rem;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
  }
`
