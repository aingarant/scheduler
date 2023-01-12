import React from 'react'
import DayListItem from './DayListItem'

const DayList = (props) => {

  console.log("--------------DAYLIST ------------", props)

  const dayListItem = props.days.map(day => {


    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange} />
    )
  })

  return (
    <ul>
      {dayListItem}
    </ul>
  )
}

export default DayList