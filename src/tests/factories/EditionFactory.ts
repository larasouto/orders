import { Edition } from '@/application/editions/domain/edition'

export class EditionFactory {
  static create(magazineId: string) {
    const edition = Edition.create({
      title: 'test-just-for-tests',
      description: 'test-just-for-tests',
      coverPath: 'test-just-for-tests',
      magazineId: magazineId,
      number: 10,
      numberOfCopies: 10,
      price: 10,
      publicationDate: new Date(),
      numberOfPages: 100,
      year: 2021,
    })
    return edition.value as Edition
  }
}
