import { useMediaQuery } from '@uidotdev/usehooks'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Empty } from '@/components/empty'
import { useCart } from '@/hooks/use-cart'

import { CartFooter } from './components/cart-footer'
import { CartProductGrid } from './components/cart-product-grid'
import { CartTable } from './components/cart-table'
import { CartContainer, Divider } from './styles'

export function Cart() {
  const { cartProducts, clearCart } = useCart()

  const navigate = useNavigate()

  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  const cartProductsTotal = Object.entries(cartProducts).reduce(
    (total, [, product]) => {
      return (total += product.price * product.quantity)
    },
    0,
  )

  function handleFinishOrder() {
    clearCart()
    navigate('/success')
  }

  const isCartEmpty = !Object.entries(cartProducts).length

  const handleReturnToHome = () => navigate('/')

  if (isCartEmpty) {
    return (
      <>
        <Helmet title="Meu Carrinho" />
        <Empty.Root>
          <Empty.ActionButton onClick={handleReturnToHome}>
            Voltar à página inicial
          </Empty.ActionButton>
        </Empty.Root>
      </>
    )
  }

  return (
    <>
      <Helmet title="Meu Carrinho" />
      <CartContainer>
        {isSmallDevice ? (
          <>
            {Object.entries(cartProducts)?.map(([title, product]) => {
              return (
                <CartProductGrid key={title} title={title} product={product} />
              )
            })}
          </>
        ) : (
          <CartTable />
        )}

        <Divider />

        <CartFooter
          total={cartProductsTotal}
          onFinishOrder={handleFinishOrder}
        />
      </CartContainer>
    </>
  )
}
