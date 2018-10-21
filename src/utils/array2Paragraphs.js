import React from 'react'

export default (array) => {
  return (
    array.map((arrayItem, arrayItemIndex) => {
      return (
        <p key={arrayItemIndex}>
          {arrayItem}
        </p>
      )
    })
  )
}
