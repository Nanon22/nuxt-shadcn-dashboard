import type { Theme } from '@/lib/registry/themes'
import { themes } from '@/lib/registry/themes'

interface Config {
  theme?: Theme['name']
  radius: number
}

export function useCustomize() {
  const { value: color } = useColorMode()
  const isDark = color === 'dark'
  const config = useCookie<Config>('config', {
    default: () => ({
      theme: 'zinc',
      radius: 0.5,
    }),
  })

  const themeClass = computed(() => `theme-${config.value.theme}`)

  function setCSSVar(name: string) {
    const theme = themes.find(theme => theme.name === name)
    for (const key in theme?.cssVars[isDark ? 'dark' : 'light']) {
      document.body.style.setProperty(`--${key}`, theme.cssVars[isDark ? 'dark' : 'light'][key])
    }
  }

  const theme = computed(() => config.value.theme)
  const radius = computed(() => config.value.radius)

  function setTheme(themeName: Theme['name']) {
    config.value.theme = themeName
    setCSSVar(themeName)
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius
  }

  const themePrimary = computed(() => {
    const t = themes.find(t => t.name === theme.value)
    return `hsl(${
      t?.cssVars[isDark ? 'dark' : 'light'].primary
    })`
  })

  return {
    themeClass,
    theme,
    setTheme,
    radius,
    setRadius,
    themePrimary,
  }
}
