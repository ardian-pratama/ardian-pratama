import { MainHeader } from '@/components/layout/MainHeader'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)')({
  component: MainLayout,
})

function MainLayout() {
  return (
    <>
      <MainHeader />
      <main className="@container">
        <Outlet />
      </main>
    </>
  )
}
