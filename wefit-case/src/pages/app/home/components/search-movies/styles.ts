import styled from 'styled-components'

export const SearchContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-200']};
  }
`

export const Input = styled.input`
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

export const SearchButton = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
