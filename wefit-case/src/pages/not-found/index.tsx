import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Empty } from '@/components/empty'
import { Header } from '@/components/header'

import { ContentContainer, NotFoundContainer } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  const handleReturnToMenu = () => navigate('/')

  return (
    <>
      <Helmet title="Página não encontrada" />
      <NotFoundContainer>
        <Header />
        <ContentContainer>
          <Empty.Root>
            <Empty.ActionButton onClick={handleReturnToMenu}>
              Voltar à página inicial
            </Empty.ActionButton>
          </Empty.Root>
        </ContentContainer>
      </NotFoundContainer>
    </>
  )
}
