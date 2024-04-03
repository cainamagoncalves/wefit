import { Trash } from '@/components/icons/trash'

import { RemoveCartProductButtonContainer } from './styles'

interface RemoveCartProductButtonProps {
  onRemoveCartProduct: () => void
}

export function RemoveCartProductButton({
  onRemoveCartProduct,
}: RemoveCartProductButtonProps) {
  return (
    <RemoveCartProductButtonContainer onClick={onRemoveCartProduct}>
      <Trash />
    </RemoveCartProductButtonContainer>
  )
}
