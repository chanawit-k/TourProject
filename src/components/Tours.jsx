import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <main className="tours">
      {tours.map((tour) => {
        return (
          <Tour
            className="tour"
            key={tour.id}
            {...tour}
            removeTour={removeTour}
          />
        )
      })}
    </main>
  )
}

export default Tours
