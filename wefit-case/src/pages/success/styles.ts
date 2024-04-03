import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const SuccessContainer = styled.div`
  width: 100%;
  height: 596px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
  text-align: center;

  img {
    width: 294px;
    height: 307px;

    @media (max-width: 768px) {
      width: 238px;
      height: 247px;
    }
  }

  h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme['blue-700']};

    @media (max-width: 768px) {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2.8125rem;
  }
`

export const SuccessReturnToMenuButton = styled(ButtonComponent)`
  width: 173px;
  height: 40px;
  font-size: 0.75rem;
  font-weight: 700;
`
