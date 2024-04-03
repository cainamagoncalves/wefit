import { Helmet } from 'react-helmet'

import notfoundImage from '@/assets/not-found.png'
import { Header } from '@/components/header'

import {
  ContentContainer,
  Divider,
  NotFoundContainer,
  ReloadPageButton,
} from './styles'

export function NotFound() {
  return (
    <>
      <Helmet title="Página não encontrada" />
      <NotFoundContainer>
        <Header />
        <ContentContainer>
          <div>
            <h1>Parece que não há nada por aqui! :(</h1>
            <img src={notfoundImage} alt="Imagem de compra bem sucedida" />
            <Divider />
            <ReloadPageButton onClick={() => window.location.reload()}>
              Recarregar página
            </ReloadPageButton>
          </div>
        </ContentContainer>
      </NotFoundContainer>
    </>
  )
}
