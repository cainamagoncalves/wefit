import { Product } from '@/api/product'
import { useCart } from '@/hooks/use-cart'

import { ProductQuantity } from '../product-quantity'
import { RemoveCartProductButton } from '../remove-cart-product-button'
import { ImageContainer, ProductTotalPrice, TableContainer } from './styles'

export function CartTable() {
  const { addCartProduct, cartProducts, removeCartProduct, subCartProduct } =
    useCart()

  const handleAddCartProduct = (product: Omit<Product, 'id'>) =>
    addCartProduct(product)

  const handleSubCartProduct = (title: string) => subCartProduct(title)

  const handleRemoveCartProduct = (title: string) => removeCartProduct(title)

  return (
    <TableContainer>
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
                <ImageContainer>
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
                </ImageContainer>
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
                <ProductTotalPrice>
                  {(value.price * value.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </ProductTotalPrice>
              </td>
              <td>
                <RemoveCartProductButton
                  onRemoveCartProduct={() => handleRemoveCartProduct(title)}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
