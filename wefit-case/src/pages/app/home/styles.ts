import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`

export const MoviesGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
