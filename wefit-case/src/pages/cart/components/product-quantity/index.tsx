import { Add } from '@/components/icons/add'
import { Sub } from '@/components/icons/sub'

import {
  ProductQuantityButtonContainer,
  ProductQuantityContainer,
} from './styles'

interface ProductQuantityProps {
  quantity: number
  onSubCartProduct: () => void
  onAddCartProduct: () => void
}

export function ProductQuantity({
  quantity,
  onAddCartProduct,
  onSubCartProduct,
}: ProductQuantityProps) {
  return (
    <ProductQuantityContainer>
      <ProductQuantityButtonContainer onClick={onSubCartProduct}>
        <Sub />
      </ProductQuantityButtonContainer>
      <span>{quantity}</span>
      <ProductQuantityButtonContainer onClick={onAddCartProduct}>
        <Add />
      </ProductQuantityButtonContainer>
    </ProductQuantityContainer>
  )
}
