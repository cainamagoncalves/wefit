import { useMediaQuery } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router-dom'

import { Product } from '@/api/product'
import { Trash } from '@/components/icons/trash'
import { useCart } from '@/hooks/use-cart'

import { EmptyCart } from './components/empty-cart'
import { ProductQuantity } from './components/product-quantity'
import {
  CartContainer,
  CartDivider,
  CartFinishOrderButton,
  CartFooter,
  CartLargeDeviceImageContainer,
  CartProductTotalPrice,
  CartSmallDeviceGrid,
  CartSmallDeviceImageContainer,
  CartSmallDeviceProductPriceAndTotalContainer,
  CartSmallDeviceProductPriceAndTotalContainerProductTotal,
  CartSmallDeviceProductPriceAndTotalContainerSubtotal,
  CartSmallDeviceQuantityContainer,
  CartTable,
  RemoveCartProductButton,
} from './styles'

export function Cart() {
  const {
    addCartProduct,
    cartProducts,
    removeCartProduct,
    subCartProduct,
    clearCart,
  } = useCart()

  const navigate = useNavigate()

  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  const cartProductsTotal = Object.entries(cartProducts).reduce(
    (total, [, product]) => {
      return (total += product.price * product.quantity)
    },
    0,
  )

  function handleAddCartProduct(product: Omit<Product, 'id'>) {
    addCartProduct(product)
  }

  function handleRemoveCartProduct(title: string) {
    removeCartProduct(title)
  }

  function handleSubCartProduct(title: string) {
    subCartProduct(title)
  }

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
          {Object.entries(cartProducts)?.map(([title, value]) => {
            return (
              <CartSmallDeviceGrid key={title}>
                <CartSmallDeviceImageContainer>
                  <img src={value.image} alt="movie image" />
                </CartSmallDeviceImageContainer>

                <CartSmallDeviceQuantityContainer>
                  <h4>{title}</h4>
                  <ProductQuantity
                    quantity={value.quantity}
                    onAddCartProduct={() =>
                      handleAddCartProduct({ title, ...value })
                    }
                    onSubCartProduct={() => handleSubCartProduct(title)}
                  />
                </CartSmallDeviceQuantityContainer>

                <CartSmallDeviceProductPriceAndTotalContainer>
                  <CartSmallDeviceProductPriceAndTotalContainerProductTotal>
                    <h4>
                      {value.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h4>

                    <RemoveCartProductButton
                      onClick={() => handleRemoveCartProduct(title)}
                    >
                      <Trash />
                    </RemoveCartProductButton>
                  </CartSmallDeviceProductPriceAndTotalContainerProductTotal>

                  <CartSmallDeviceProductPriceAndTotalContainerSubtotal>
                    <h4>SUBTOTAL</h4>
                    <CartProductTotalPrice>
                      {(value.price * value.quantity).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </CartProductTotalPrice>
                  </CartSmallDeviceProductPriceAndTotalContainerSubtotal>
                </CartSmallDeviceProductPriceAndTotalContainer>
              </CartSmallDeviceGrid>
            )
          })}
        </>
      ) : (
        <CartTable>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cartProducts)?.map(([title, value]) => {
              return (
                <tr key={title}>
                  <td>
                    <CartLargeDeviceImageContainer>
                      <img src={value.image} alt="movie image" />
                      <div>
                        <h5>{title}</h5>
                        <h4>
                          {value.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h4>
                      </div>
                    </CartLargeDeviceImageContainer>
                  </td>
                  <td>
                    <ProductQuantity
                      quantity={value.quantity}
                      onAddCartProduct={() =>
                        handleAddCartProduct({ title, ...value })
                      }
                      onSubCartProduct={() => handleSubCartProduct(title)}
                    />
                  </td>
                  <td>
                    <CartProductTotalPrice>
                      {(value.price * value.quantity).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </CartProductTotalPrice>
                  </td>
                  <td>
                    <RemoveCartProductButton
                      onClick={() => handleRemoveCartProduct(title)}
                    >
                      <Trash />
                    </RemoveCartProductButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </CartTable>
      )}

      <CartDivider />

      {isSmallDevice ? (
        <CartFooter>
          <div>
            <span>TOTAL</span>
            <h4>
              {cartProductsTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
          <CartFinishOrderButton onClick={handleFinishOrder}>
            FINALIZAR PEDIDO
          </CartFinishOrderButton>
        </CartFooter>
      ) : (
        <CartFooter>
          <CartFinishOrderButton onClick={handleFinishOrder}>
            FINALIZAR PEDIDO
          </CartFinishOrderButton>
          <div>
            <span>TOTAL</span>
            <h4>
              {cartProductsTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
        </CartFooter>
      )}
    </CartContainer>
  )
}
