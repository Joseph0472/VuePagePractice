import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'
import BlockItem from '../AppHeader.vue'


// Render tests
describe('Render Test', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHeader, { props: { title: 'Vitest' } })
    expect(wrapper.text()).toContain('Vitest')
  })
})
describe('Render Test', () => { // Default text apply when empty obj set
  it('renders properly', () => {
    const wrapper = mount(BlockItem, { props: { blockItem: {} } })
    expect(wrapper.text()).toContain('Title')
  })
})
