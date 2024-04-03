import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const CartFooterContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    span {
      color: #999999;
      font-weight: 700;
      font-size: 0.875rem;
    }

    h4 {
      color: ${({ theme }) => theme['blue-700']};
      font-weight: 1.5rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const CartFooterFinishOrderButton = styled(ButtonComponent)`
  width: 173px;
  height: 34px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`
