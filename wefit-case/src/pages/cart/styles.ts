import styled from 'styled-components'

import { ButtonComponent } from '@/components/button/styles'

export const CartContainer = styled.div`
  width: 100%;
  height: min-content;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const CartTable = styled.table`
  thead {
    th {
      width: 350px;
      text-align: left;
      color: ${({ theme }) => theme['text-muted']};
    }
  }

  tbody {
    tr {
      td {
        padding-top: 1rem;
      }
      :nth-child(4) {
        text-align: right;
      }
    }
  }
`

export const CartLargeDeviceImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme['blue-700']};
  > img {
    width: 91px;
    height: 114px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h5 {
      font-size: 14px;
    }

    > h4 {
      font-size: 16px;
    }
  }
`

export const CartProductTotalPrice = styled.h2`
  color: ${({ theme }) => theme['blue-700']};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
`

export const CartDivider = styled.div`
  width: 100%;
  border: 1px solid #999999;
  margin-top: 1.5rem;
`

export const CartFooter = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    span {
      color: #999999;
      font-weight: 700;
      font-size: 0.875rem;
    }

    h4 {
      color: ${({ theme }) => theme['blue-700']};
      font-weight: 1.5rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const CartFinishOrderButton = styled(ButtonComponent)`
  width: 173px;
  height: 34px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CartSmallDeviceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

export const CartSmallDeviceImageContainer = styled.div`
  img {
    width: 64px;
    height: 82px;
  }
`

export const CartSmallDeviceQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.675rem;

  h4 {
    width: 104px;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme['blue-700']};
  }
`

export const CartSmallDeviceProductPriceAndTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.675rem;
  width: 100%;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['blue-700']};
  }
`

export const CartSmallDeviceProductPriceAndTotalContainerProductTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CartSmallDeviceProductPriceAndTotalContainerSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: #999999;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const RemoveCartProductButton = styled.div`
  display: inline-flex;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
