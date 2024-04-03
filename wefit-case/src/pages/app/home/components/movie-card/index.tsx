import { Product } from '@/api/product'
import { ShoppingCart } from '@/components/icons/shopping-cart'
import { useCart } from '@/hooks/use-cart'

import {
  AddToCartButton,
  ImageContainer,
  MovieCardContainer,
  ProductPrice,
  ProductTitle,
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
      <ImageContainer src={product.image} alt="Imagem do produto" />

      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </ProductPrice>

      <AddToCartButton
        $variant={productQuantityOnCart ? 'secondary' : 'primary'}
        onClick={handleAddCartProduct}
      >
        <div>
          <ShoppingCart />
          <span>{productQuantityOnCart ?? 0}</span>
        </div>
        ADICIONAR AO CARRINHO
      </AddToCartButton>
    </MovieCardContainer>
  )
}
