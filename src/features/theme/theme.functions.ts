import {
  getThemeFromCookie,
  setThemeCookie,
} from '@/features/theme/theme.server'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const themeValidator = z.enum(['light', 'dark'])

export const getTheme = createServerFn({ method: 'GET' }).handler(() =>
  getThemeFromCookie(),
)

export const setTheme = createServerFn({ method: 'POST' })
  .inputValidator(themeValidator)
  .handler(({ data }) => {
    setThemeCookie(data)
  })
