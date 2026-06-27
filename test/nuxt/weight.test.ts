import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('weight page', () => {
  it('renders all four section cards', async () => {
    const mod = await import('~/pages/weight.vue')
    const page = await mountSuspended(mod.default)

    const headings = page.findAll('h2')
    const labels = headings.map(h => h.text())
    expect(headings).toHaveLength(4)
    expect(labels).toEqual(['Basic', 'Body Composition', 'Metabolic', 'Ratings'])
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

  describe('validation', () => {
    it('shows error when weight is missing', async () => {
      const mod = await import('~/pages/weight.vue')
      const page = await mountSuspended(mod.default)

      await page.find('form').trigger('submit')
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(page.text()).toContain('Weight is required')
    })

    it('shows no errors when only required weight is provided', async () => {
      const mod = await import('~/pages/weight.vue')
      const page = await mountSuspended(mod.default)
      const inputs = page.findAll('input')

      if (inputs.length > 0) {
        await inputs[0].setValue(75)
        await inputs[0].trigger('blur')
        await new Promise(resolve => setTimeout(resolve, 50))
      }

      await page.find('form').trigger('submit')
      await new Promise(resolve => setTimeout(resolve, 50))

      const text = page.text()
      expect(text).not.toContain('Weight is required')
      expect(text).not.toContain('must be')
    })
  })
})
