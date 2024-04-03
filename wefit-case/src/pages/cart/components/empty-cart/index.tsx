import { useNavigate } from 'react-router-dom'

import notfoundImage from '@/assets/not-found.png'

import { EmptyCartButton, EmptyCartContainer, EmptyCartDivider } from './styles'

export function EmptyCart() {
  const navigate = useNavigate()

  const handleReturnToHomePage = () => navigate('/')

  return (
    <EmptyCartContainer>
      <h1>Parece que não há nada por aqui! :(</h1>
      <img src={notfoundImage} alt="Imagem de página não encontrada" />
      <EmptyCartDivider />
      <EmptyCartButton onClick={handleReturnToHomePage}>
        Retornar à página inicial
      </EmptyCartButton>
    </EmptyCartContainer>
  )
}
