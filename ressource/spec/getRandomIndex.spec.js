import getRandomIndex from '../getRandomIndex'

describe('getRandomIndex', () => {
  let max

  beforeAll(() => {
    max = 6
  })

  test('return value is smaller than or equal to maximum value', () => {
    let wasLarger = false

    for (let i; i < 100; i++) {
      let m = getRandomIndex(max)

      if (m > max) {
        wasLarger = true
        break;
      }
    }

    expect(wasLarger).toBe(false)
  })
})
