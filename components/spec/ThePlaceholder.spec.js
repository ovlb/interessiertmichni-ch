import { shallow } from '@vue/test-utils'
import ThePlaceholder from '../ThePlaceholder.vue'

describe('ThePlaceholder', () => {
  const wrapper = shallow(ThePlaceholder)

  test('match HTML sturcture', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
