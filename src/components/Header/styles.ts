import styled from 'styled-components'

import coverImg from '../../assets/images/tab-cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 250px;
  background: url(${coverImg}) no-repeat center/cover;
  text-align: center;

  img {
    margin-top: 3rem;
  }
`
