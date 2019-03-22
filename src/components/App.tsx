import React, { useState } from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { TOGGLES } from '../enums'
import { useData } from '../hooks'
import SofarImage from '../images/header.jpg'
import { IEvent } from '../interfaces'
import { typography } from '../theme/typography'
import { Container, Heading, Image } from './atoms'
import { Toggle } from './molecules'
import { CardList } from './organism'
import { GlobalStyle, ThemeProvider } from './utility'

export function App() {
  const [data, loading] = useData<IEvent[]>()
  const [toggle, setToggle] = useState(TOGGLES.ALL)

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
            <Image src={SofarImage} />
            <Heading type="h1">Sofar</Heading>
            <Toggle
              setToggle={handleToggle}
              toggles={[TOGGLES.ROCK, TOGGLES.JAZZ, TOGGLES.FOLK, TOGGLES.ALL]}
              activeToggle={toggle}
            />
            {loading ? (
              'loading'
            ) : (
              <CardList events={data} activeToggle={toggle} />
            )}
          </Container>
        </>
      </ThemeProvider>
    </div>
  )
}
