import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

import { AppContainer, AppContentContainer } from './styles'

export function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <AppContentContainer>
        <Outlet />
      </AppContentContainer>
    </AppContainer>
  )
}
