import { useNavigate } from 'react-router-dom'

import successImage from '@/assets/success.png'

import { SuccessContainer, SuccessReturnToMenuButton } from './styles'

export function Success() {
  const navigate = useNavigate()

  const handleReturnToHome = () => navigate('/')

  return (
    <SuccessContainer>
      <h1>Compra realizada com sucesso!</h1>
      <img src={successImage} alt="Imagem de compra bem sucedida" />
      <SuccessReturnToMenuButton onClick={handleReturnToHome}>
        VOLTAR
      </SuccessReturnToMenuButton>
    </SuccessContainer>
  )
}
