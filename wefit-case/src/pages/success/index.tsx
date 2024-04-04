import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import successImage from '@/assets/success.png'

import { ReturnToMenuButton, SuccessContainer } from './styles'

export function Success() {
  const navigate = useNavigate()

  const handleReturnToHome = () => navigate('/')

  return (
    <>
      <Helmet title="Pedido realizado" />
      <SuccessContainer>
        <h1>Compra realizada com sucesso!</h1>
        <img src={successImage} alt="Imagem de compra bem sucedida" />
        <ReturnToMenuButton onClick={handleReturnToHome}>
          VOLTAR
        </ReturnToMenuButton>
      </SuccessContainer>
    </>
  )
}
