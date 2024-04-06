import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`

export const ContentContainer = styled.div`
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
`
