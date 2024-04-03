import { Product } from '@/api/product'
import { ShoppingCart } from '@/components/icons/shopping-cart'
import { useCart } from '@/hooks/use-cart'

import {
  MovieCardButton,
  MovieCardContainer,
  MovieCardImageContainer,
  MovieCardPrice,
  MovieCardTitle,
} from './styles'

interface MovieCardProps {
  product: Product
}

export function MovieCard({ product }: MovieCardProps) {
  const { cartProducts, addCartProduct } = useCart()

  function handleAddCartProduct() {
    addCartProduct(product)
  }

  const productQuantityOnCart = cartProducts[product.title]?.quantity

  return (
    <MovieCardContainer>
      <MovieCardImageContainer src={product.image} />

      <MovieCardTitle>{product.title}</MovieCardTitle>
      <MovieCardPrice>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </MovieCardPrice>

      <MovieCardButton
        $variant={productQuantityOnCart ? 'secondary' : 'primary'}
        onClick={handleAddCartProduct}
      >
        <div>
          <ShoppingCart />
          <span>{productQuantityOnCart ?? 0}</span>
        </div>
        ADICIONAR AO CARRINHO
      </MovieCardButton>
    </MovieCardContainer>
  )
}
