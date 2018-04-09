import { shallow } from '@vue/test-utils'
import ImageContainer from '../ImageContainer'
import testImageData from './util/testImageData'

describe('ImageContainer', () => {
  const wrapper = shallow(ImageContainer, {
    propsData: testImageData
  })

  test('receive props', () => {
    expect(wrapper.vm.file).toBe(testImageData.file)
  })

  test('construct the correct file src', () => {
    expect(wrapper.vm.imageSource).toBe(`/i/${testImageData.file}`)
  })

  test('match HTML structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
