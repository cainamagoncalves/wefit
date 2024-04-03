import styled from 'styled-components'

enum Variants {
  primary = 'blue-200',
  secondary = 'success',
}

interface ButtonComponentProps {
  $variant?: keyof typeof Variants
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  border: 0;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ theme, $variant }) =>
    $variant ? theme[Variants[$variant]] : theme['blue-200']};
  color: ${({ theme }) => theme.white};
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
