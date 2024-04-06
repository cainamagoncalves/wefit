import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

export const ImageContainer = styled.div`
  img {
    width: 64px;
    height: 82px;
  }
`

export const QuantityContainer = styled.div`
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

export const PriceAndSubtotalContainer = styled.div`
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

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: #999999;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const ProductTotalPrice = styled.h2`
  color: ${({ theme }) => theme['blue-700']};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
`
