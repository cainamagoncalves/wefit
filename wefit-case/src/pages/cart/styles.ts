import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  height: min-content;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #999999;
  margin-top: 1.5rem;
`
