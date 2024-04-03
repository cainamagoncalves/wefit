import { useMediaQuery } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router-dom'

import { useCart } from '@/hooks/use-cart'

import { CartFooter } from './components/cart-footer'
import { CartProductGrid } from './components/cart-product-grid'
import { CartTable } from './components/cart-table'
import { EmptyCart } from './components/empty-cart'
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

  if (isCartEmpty) {
    return <EmptyCart />
  }

  return (
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

      <CartFooter total={cartProductsTotal} onFinishOrder={handleFinishOrder} />
    </CartContainer>
  )
}
