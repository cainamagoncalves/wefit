import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const EmptyCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    max-width: 400px;
    height: 350px;
  }

  text-align: center;
`

export const EmptyCartButton = styled(ButtonComponent)`
  max-width: 400px;
  font-size: 0.75rem;
  font-weight: 700;
`
