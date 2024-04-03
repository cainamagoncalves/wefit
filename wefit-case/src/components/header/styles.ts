import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const HeaderLogo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`

export const CartContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const CartTextContainer = styled.div`
  text-align: right;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    > p {
      display: none;
    }
  }

  > span {
    color: ${({ theme }) => theme['text-muted']};
    font-size: 0.75rem;
  }
`
