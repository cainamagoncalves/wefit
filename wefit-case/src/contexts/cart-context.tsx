import { createContext, ReactNode, useState } from 'react'

import { Product } from '@/api/product'

export interface CartProduct {
  [title: string]: {
    quantity: number
    price: number
    image: string
  }
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CreateContextProps {
  cartProducts: CartProduct
  addCartProduct: (product: Omit<Product, 'id'>) => void
  subCartProduct: (title: string) => void
  removeCartProduct: (title: string) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CreateContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct>({})

  function addCartProduct(product: Omit<Product, 'id'>) {
    const newCartProducts = { ...cartProducts }

    const cartProductExist = newCartProducts[product.title]

    if (cartProductExist) {
      newCartProducts[product.title].quantity += 1
    } else {
      newCartProducts[product.title] = {
        quantity: 1,
        price: product.price,
        image: product.image,
      }
    }

    setCartProducts(newCartProducts)
  }

  function subCartProduct(title: string) {
    const newCartProducts = { ...cartProducts }

    const removedProduct = newCartProducts[title]

    const isLastCurrentRemovedProductOnCart = removedProduct.quantity - 1 === 0

    if (isLastCurrentRemovedProductOnCart) {
      delete newCartProducts[title]
    } else {
      newCartProducts[title].quantity -= 1
    }

    setCartProducts(newCartProducts)
  }

  function removeCartProduct(title: string) {
    const newCartProducts = { ...cartProducts }

    delete newCartProducts[title]

    setCartProducts(newCartProducts)
  }

  function clearCart() {
    setCartProducts({})
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCartProduct,
        subCartProduct,
        removeCartProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
