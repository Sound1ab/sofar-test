import React from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { useData } from '../hooks'
import { typography } from '../theme/typography'
import { Heading } from './atoms'
import { GlobalStyle, ThemeProvider } from './utility'

export function App() {
  const [data, loading] = useData()
  return (
    <div>
      <ThemeProvider>
        <>
          <GlobalStyle />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Heading type="h1">Sofar</Heading>
          {loading ? 'loading' : <span>{JSON.stringify(data)}</span>}
        </>
      </ThemeProvider>
    </div>
  )
}
