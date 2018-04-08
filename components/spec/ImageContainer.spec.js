import { shallow } from '@vue/test-utils'
import ImageContainer from '../ImageContainer'
import { wrap } from 'module';

const factory = (values = {}) => {
  return shallow(ImageContainer, {
    data: { ...values }
  })
}

describe('ImageContainer', () => {
  const testImageData = {
    file: '2341.gif',
    alt: 'This is an alt text.'
  }

  const wrapper = factory()
  wrapper.setProps(testImageData)

  test('receive props', () => {
    expect(wrapper.vm.file).toBe(testImageData.file)
  })

  test('construct the correct file src', () => {
    expect(wrapper.vm.imageSource).toBe(`/i/${testImageData.file}`)
  })

  test('construct the correct file url', () => {
    expect(wrapper.vm.imageLink).toBe(`https://www.interessiertmichni.ch/i/${testImageData.file}`)
  })

  test('display the constructed URL in the link box', () => {
    const $link = wrapper.find('.image-container__link')

    expect($link.text()).toBe(wrapper.vm.imageLink)
  })

  test('match HTML structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
