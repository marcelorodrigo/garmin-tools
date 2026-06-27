import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('weight page', () => {
  it('renders the form with all four section cards', async () => {
    const mod = await import('~/pages/weight.vue')
    const page = await mountSuspended(mod.default)

    expect(page.find('h2').text()).toBe('Basic')
  })

  it('renders a submit button', async () => {
    const mod = await import('~/pages/weight.vue')
    const page = await mountSuspended(mod.default)

    const button = page.find('button[type="submit"]')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Generate')
  })

  it('renders the Weight page hero section', async () => {
    const mod = await import('~/pages/weight.vue')
    const page = await mountSuspended(mod.default)

    expect(page.text()).toContain('Weight FIT Generator')
  })
})
