import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import { getProducts } from '@/api/get-products'
import { Search } from '@/components/icons/search'
import { LoadingSpinner } from '@/components/loading-spinner'

import { MovieCard } from './components/movie-card'
import {
  HomeContainer,
  HomeMoviesGrid,
  HomeSeachInput,
  HomeSearchIconWrapper,
  HomeSearchInputContainer,
} from './styles'

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const search = searchParams.get('search')

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', search],
    queryFn: () => getProducts({ search }),
  })

  function handleSearchProducts() {
    setSearchParams((prevUrlState) => {
      if (inputRef?.current?.value) {
        prevUrlState.set('search', inputRef?.current?.value)
      } else {
        prevUrlState.delete('search')
      }

      return prevUrlState
    })
  }

  return (
    <HomeContainer>
      <HomeSearchInputContainer>
        <HomeSeachInput
          onBlur={handleSearchProducts}
          ref={inputRef}
          placeholder="Buscar filme pelo nome"
        />
        <HomeSearchIconWrapper onClick={handleSearchProducts}>
          <Search />
        </HomeSearchIconWrapper>
      </HomeSearchInputContainer>
      {isLoadingProducts ? (
        <LoadingSpinner />
      ) : (
        <HomeMoviesGrid>
          {products?.map((product) => {
            return <MovieCard key={product.id} product={product} />
          })}
        </HomeMoviesGrid>
      )}
    </HomeContainer>
  )
}
