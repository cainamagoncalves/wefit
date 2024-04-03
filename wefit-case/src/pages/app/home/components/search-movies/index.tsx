import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Search } from '@/components/icons/search'

import { Input, SearchButton, SearchContainer } from './styles'

export function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')

  const inputRef = useRef<HTMLInputElement | null>(null)

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
    <SearchContainer>
      <Input
        onBlur={handleSearchProducts}
        ref={inputRef}
        defaultValue={search ?? ''}
        placeholder="Buscar filme pelo nome"
      />
      <SearchButton onClick={handleSearchProducts}>
        <Search />
      </SearchButton>
    </SearchContainer>
  )
}
