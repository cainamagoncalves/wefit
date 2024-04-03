import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const MovieCardContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.white};
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 4px;
`

export const MovieCardImageContainer = styled.img`
  width: 147px;
  height: 188px;
`

export const MovieCardTitle = styled.h5`
  font-size: 1.125rem;
  color: ${({ theme }) => theme['blue-700']};
`

export const MovieCardPrice = styled.h4`
  font-size: 1.375rem;
  color: ${({ theme }) => theme['blue-700']};
`

export const MovieCardButton = styled(ButtonComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  gap: 0.75rem;
  font-weight: 700;
  height: 40px;

  > div {
    display: flex;
    align-items: center;
    > span {
      font-weight: 400;
    }
  }
`
