import React from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { useData } from '../hooks'
import { typography } from '../theme/typography'
import { Container, Heading } from './atoms'
import { Card } from './molecules'
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
          <Container>
            <Heading type="h1">Sofar</Heading>
            <Card />
          </Container>
        </>
      </ThemeProvider>
    </div>
  )
}
