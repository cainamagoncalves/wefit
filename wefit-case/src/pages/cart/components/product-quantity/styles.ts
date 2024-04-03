import styled from 'styled-components'

export const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme['blue-700']};
    border: 1px solid #d9d9d9d9;
    border-radius: 4px;
    font-size: 0.875rem;
    width: 62px;
    height: 26px;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 59px;
    }
  }

  @media (max-width: 768px) {
    width: 117px;
  }
`
export const ProductQuantityButtonContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
