import notfoundImage from '@/assets/not-found.png'
import { Header } from '@/components/header'

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundDivider,
  NotFoundReturnToMenuButton,
} from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <Header />
      <NotFoundContent>
        <div>
          <h1>Parece que não há nada por aqui! :(</h1>
          <img src={notfoundImage} alt="Imagem de compra bem sucedida" />
          <NotFoundDivider />
          <NotFoundReturnToMenuButton onClick={() => window.location.reload()}>
            Recarregar página
          </NotFoundReturnToMenuButton>
        </div>
      </NotFoundContent>
    </NotFoundContainer>
  )
}
