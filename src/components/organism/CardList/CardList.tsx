import React from 'react'
import { IEvent } from '../../../interfaces'
import { styled } from '../../../theme'
import { Card } from '../../molecules'

const Style = styled.div`
  position: relative;
`

interface ICardList {
  events: IEvent[]
}

export function CardList({ events }: ICardList) {
  return (
    <Style>
      {events.map(event => (
        <Card
          dayOfMonth={event.date.dayOfMonth}
          dayOfWeek={event.date.dayOfWeek}
          location={event.location}
          month={event.date.month}
        />
      ))}
    </Style>
  )
}
