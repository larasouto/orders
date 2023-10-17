import { Magazine } from '@/application/magazines/domain/magazine'
import { PublicationPeriod } from '@/application/magazines/domain/magazine.schema'

export class MagazineFactory {
  static create(themeId: string) {
    const magazine = Magazine.create({
      name: 'test-just-for-tests',
      description: 'test-just-for-tests',
      publicationPeriod: PublicationPeriod.ANNUALLY,
      themeId: themeId,
      yearFounded: 2023,
    })
    return magazine.value as Magazine
  }
}
