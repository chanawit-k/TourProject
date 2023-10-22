import React, { useEffect, useState } from 'react'

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [isHideInfo, setIsHideInfo] = useState(true)

  return (
    <div className="single-tour">
      <div className="tour-price">{price}</div>
      <img src={image} alt={name} className="img" />

      <div class="tour-info">
        <h5>{name}</h5>
        <p className={isHideInfo ? 'hide-info' : ''}>{info}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => {
            setIsHideInfo(!isHideInfo)
          }}
        >
          Read More
        </button>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => {
            removeTour(id)
          }}
        >
          Not Intesrested
        </button>
      </div>
    </div>
  )
}

export default Tour
