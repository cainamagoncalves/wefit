import { Link } from 'react-router-dom'

import emptyCart from '@/assets/empty-cart.png'

import { EmptyCartButton, EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <div>
        <img src={emptyCart} alt="Carrinho de compras vazio" />
        <h2>Seu carrinho está vazio.</h2>
        <p>
          Parece que você não adicionou nada ao seu carrinho. Volte à página
          inicial e explore os filmes disponíveis.
        </p>
      </div>

      <Link to="/">
        <EmptyCartButton>VOLTAR PARA HOME</EmptyCartButton>
      </Link>
    </EmptyCartContainer>
  )
}
