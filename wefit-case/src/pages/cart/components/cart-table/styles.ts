import styled from 'styled-components'

export const TableContainer = styled.table`
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

export const ImageContainer = styled.div`
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

export const ProductTotalPrice = styled.h2`
  color: ${({ theme }) => theme['blue-700']};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
`
