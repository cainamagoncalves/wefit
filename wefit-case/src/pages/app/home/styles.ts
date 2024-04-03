import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`

export const HomeSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-200']};
  }
`

export const HomeSeachInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  line-height: 1.125rem;
  outline: none;
  border: none;
  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: '#C0C0C0';
  }
`

export const HomeSearchIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const HomeMoviesGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
