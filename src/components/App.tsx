import React from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { typography } from '../theme/typography'
import { Heading } from './atoms'
import { GlobalStyle, ThemeProvider } from './utility'

export function App() {
  return (
    <div>
      <ThemeProvider>
        <>
          <GlobalStyle />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Heading type="h1">Sofar</Heading>
        </>
      </ThemeProvider>
    </div>
  )
}
