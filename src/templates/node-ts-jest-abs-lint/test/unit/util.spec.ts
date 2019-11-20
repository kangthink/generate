
import { health } from '@src/util/logger'

test('a', () => {
  expect(health()).toBe('health')
})