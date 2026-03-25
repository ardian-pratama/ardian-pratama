import Brand from '@/assets/icons/brand.svg?react'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <main
      className="flex min-h-svh flex-col items-center justify-center gap-4
    p-4"
    >
      <section className="my-8 flex w-full max-w-sm flex-col gap-4">
        <Brand className="text-primary h-15 w-full" />
        <Outlet />
      </section>
    </main>
  )
}
