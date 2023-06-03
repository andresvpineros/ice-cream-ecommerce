/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { afterEach } from 'vitest'
import i18n from './i18nextConfiguration'

// afterEach(() => {
//   cleanup()
// })

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    ),
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

// override render export
export { customRender as render }
