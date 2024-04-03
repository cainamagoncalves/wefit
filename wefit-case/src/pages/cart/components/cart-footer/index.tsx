import { useMediaQuery } from '@uidotdev/usehooks'

import { CartFooterContainer, CartFooterFinishOrderButton } from './styles'

interface CartFooterProps {
  onFinishOrder: () => void
  total: number
}

export function CartFooter({ onFinishOrder, total }: CartFooterProps) {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  return (
    <>
      {isSmallDevice ? (
        <CartFooterContainer>
          <div>
            <span>TOTAL</span>
            <h4>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
          <CartFooterFinishOrderButton onClick={onFinishOrder}>
            FINALIZAR PEDIDO
          </CartFooterFinishOrderButton>
        </CartFooterContainer>
      ) : (
        <CartFooterContainer>
          <CartFooterFinishOrderButton onClick={onFinishOrder}>
            FINALIZAR PEDIDO
          </CartFooterFinishOrderButton>
          <div>
            <span>TOTAL</span>
            <h4>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
        </CartFooterContainer>
      )}
    </>
  )
}
