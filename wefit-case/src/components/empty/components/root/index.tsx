import { ReactNode } from 'react'

import notFoundImage from '@/assets/not-found.png'

import { Divider, EmptyContainer } from './styles'

interface EmptyProps {
  children: ReactNode
}

export function Root({ children }: EmptyProps) {
  return (
    <EmptyContainer>
      <h1>Parece que não há nada por aqui! :(</h1>
      <img src={notFoundImage} alt="Imagem de página sem conteúdo" />
      <Divider />
      {children}
    </EmptyContainer>
  )
}
