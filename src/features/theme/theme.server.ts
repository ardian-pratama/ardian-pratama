import { getCookie, setCookie } from '@tanstack/react-start/server'

const STORAGE_KEY = 'theme'

export function getThemeFromCookie() {
  return getCookie(STORAGE_KEY) ?? 'light'
}

export function setThemeCookie(theme) {
  setCookie(STORAGE_KEY, theme)
}
