import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  // return (
  //   <main className="tours">
  // {
  //   tours.map((tour) => {
  //     return (
  //       <Tour
  //         className="tour"
  //         key={tour.id}
  //         {...tour}
  //         removeTour={removeTour}
  //       />
  //     )
  //   })
  // }
  //   </main>
  // )

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
