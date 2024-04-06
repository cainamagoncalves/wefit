import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ActionButtonContainer } from './styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return <ActionButtonContainer {...rest}>{children}</ActionButtonContainer>
}
