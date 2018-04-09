import { shallow } from '@vue/test-utils'
import ImageLink from '../ImageLink.vue'
import testImageData from './util/testImageData'
import { wrap } from 'module';

describe('ImageLink', () => {
  const wrapper = shallow(ImageLink,{
    propsData: {
      imgId: testImageData.imgId
    }
  })
  // wrapper.setProps({imgId: testImageData.id})

  test('set the correct URL', () => {
    const text = wrapper.find('p')

    expect(text.text()).toBe(`https://www.interessiertmichni.ch/${testImageData.imgId}/`)
  })
})
