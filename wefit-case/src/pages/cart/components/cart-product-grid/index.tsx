import { Product } from '@/api/product'
import { useCart } from '@/hooks/use-cart'

import { ProductQuantity } from '../product-quantity'
import { RemoveCartProductButton } from '../remove-cart-product-button'
import {
  GridContainer,
  ImageContainer,
  PriceAndSubtotalContainer,
  PriceContainer,
  ProductTotalPrice,
  QuantityContainer,
  SubtotalContainer,
} from './styles'

interface CartProductGridProps {
  title: string
  product: {
    quantity: number
    price: number
    image: string
  }
}

export function CartProductGrid({ title, product }: CartProductGridProps) {
  const { addCartProduct, removeCartProduct, subCartProduct } = useCart()

  const handleAddCartProduct = (product: Omit<Product, 'id'>) =>
    addCartProduct(product)

  const handleSubCartProduct = (title: string) => subCartProduct(title)

  const handleRemoveCartProduct = (title: string) => removeCartProduct(title)

  return (
    <GridContainer>
      <ImageContainer>
        <img src={product.image} alt="movie image" />
      </ImageContainer>

      <QuantityContainer>
        <h4>{title}</h4>
        <ProductQuantity
          quantity={product.quantity}
          onAddCartProduct={() => handleAddCartProduct({ title, ...product })}
          onSubCartProduct={() => handleSubCartProduct(title)}
        />
      </QuantityContainer>

      <PriceAndSubtotalContainer>
        <PriceContainer>
          <h4>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h4>

          <RemoveCartProductButton
            onRemoveCartProduct={() => handleRemoveCartProduct(title)}
          />
        </PriceContainer>

        <SubtotalContainer>
          <h4>SUBTOTAL</h4>
          <ProductTotalPrice>
            {(product.price * product.quantity).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </ProductTotalPrice>
        </SubtotalContainer>
      </PriceAndSubtotalContainer>
    </GridContainer>
  )
}
