import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseSelect from "../BaseSelect.vue"

describe("BaseSelect", () => {
  it('Render with props', () => {
    const props = { label: 'Teste', icon: 'beginner', modelValue: 'teste' }
    const wrapper = mount(BaseSelect, { props })

    const label = wrapper.find('label')
    expect(label).toBeTruthy()

    expect(label.text()).toMatch(props.label)

    // expect(wrapper.text()).toContain('Teste')
    
  })
})