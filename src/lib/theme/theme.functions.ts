import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'
import { z } from 'zod'

const themeValidator = z.enum(['light', 'dark'])
const STORAGE_KEY = 'theme'

export const getTheme = createServerFn({ method: 'GET' }).handler(
  () => getCookie(STORAGE_KEY) ?? 'light',
)

export const setTheme = createServerFn({ method: 'POST' })
  .inputValidator(themeValidator)
  .handler(({ data }) => {
    setCookie(STORAGE_KEY, data)
  })
