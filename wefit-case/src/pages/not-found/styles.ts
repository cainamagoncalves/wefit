import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`

export const NotFoundContent = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: 1;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  div {
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
      width: 178px;
      height: 265px;

      @media (max-width: 768px) {
        width: 178px;
        height: 265px;
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
  }
`

export const NotFoundReturnToMenuButton = styled(ButtonComponent)`
  width: 173px;
  height: 40px;
  font-size: 0.75rem;
  font-weight: 700;
`

export const NotFoundDivider = styled.span`
  width: 447px;
  height: 1.36px;
  margin-top: -1.5rem;
  border: 1px solid #3f3d56;

  @media (max-width: 768px) {
    width: 178px;
  }
`
