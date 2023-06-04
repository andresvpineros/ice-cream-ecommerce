import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { navigationRouter } from '@/app/ui/navigationRouter'
import { i18n } from '@/app/common/utils'

import '@/app/common/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={navigationRouter} />
    </I18nextProvider>
  </React.StrictMode>
)
