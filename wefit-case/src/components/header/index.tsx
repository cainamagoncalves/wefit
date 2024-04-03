import { useCart } from '@/hooks/use-cart'

import { Basket } from '../icons/basket'
import {
  CartContainer,
  CartTextContainer,
  HeaderContainer,
  HeaderLogo,
} from './styles'

export function Header() {
  const { cartProducts } = useCart()

  const cartItemsQuantity = Object.entries(cartProducts).reduce(
    (quantity, [, value]) => {
      return quantity + value.quantity
    },
    0,
  )

  return (
    <HeaderContainer>
      <HeaderLogo to="/">WeMovies</HeaderLogo>
      <CartContainer to="/cart">
        <CartTextContainer>
          <p>Meu carrinho</p>
          <span>{cartItemsQuantity} itens</span>
        </CartTextContainer>
        <Basket />
      </CartContainer>
    </HeaderContainer>
  )
}
