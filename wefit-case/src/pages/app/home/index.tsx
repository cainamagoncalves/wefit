import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { getProducts } from '@/api/get-products'
import { Empty } from '@/components/empty'
import { LoadingSpinner } from '@/components/loading-spinner'

import { MovieCard } from './components/movie-card'
import { SearchMovies } from './components/search-movies'
import { HomeContainer, MoviesGrid } from './styles'

export function Home() {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery({
    queryKey: ['products', search],
    queryFn: () => getProducts({ search }),
  })

  if (isError) {
    return (
      <>
        <Helmet title="Home" />
        <Empty.Root>
          <Empty.ActionButton onClick={() => window.location.reload()}>
            Recarregar página
          </Empty.ActionButton>
        </Empty.Root>
      </>
    )
  }

  return (
    <>
      <Helmet title="Home" />
      <HomeContainer>
        <SearchMovies />

        {isLoadingProducts ? (
          <LoadingSpinner />
        ) : (
          <MoviesGrid>
            {products?.map((product) => {
              return <MovieCard key={product.id} product={product} />
            })}
          </MoviesGrid>
        )}
      </HomeContainer>
    </>
  )
}
