import styled from 'styled-components'

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`

export const LoadingSpinnerLoader = styled.div`
  width: 55px;
  height: 55px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    100% {
      transform: rotate(360deg);
    }
  }
`
