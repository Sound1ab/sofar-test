import React, { useState } from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { TOGGLES } from '../enums'
import { useData } from '../hooks'
import { typography } from '../theme/typography'
import { Container, Heading } from './atoms'
import { Card, Toggle } from './molecules'
import { GlobalStyle, ThemeProvider } from './utility'

export function App() {
  const [data, loading] = useData()
  const [toggle, setToggle] = useState(TOGGLES.ALL)

  console.log(data)

  function handleToggle(
    activeToggle: TOGGLES,
    e: React.MouseEvent<HTMLElement>
  ) {
    e.preventDefault()
    setToggle(activeToggle)
  }

  return (
    <div>
      <ThemeProvider>
        <>
          <GlobalStyle />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Container>
            <Heading type="h1">Sofar</Heading>
            <Toggle
              setToggle={handleToggle}
              toggles={[TOGGLES.ROCK, TOGGLES.JAZZ, TOGGLES.FOLK, TOGGLES.ALL]}
              activeToggle={toggle}
            />
            <Card />
          </Container>
        </>
      </ThemeProvider>
    </div>
  )
}
