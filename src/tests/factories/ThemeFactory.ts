import { Theme } from '@/application/themes/domain/theme'

export class ThemeFactory {
  static create() {
    const theme = Theme.create({
      name: 'test-just-for-tests',
      description: 'test-just-for-tests',
    })

    return theme.value as Theme
  }
}
