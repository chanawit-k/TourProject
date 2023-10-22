import React, { useEffect, useState } from 'react'

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [isHideInfo, setIsHideInfo] = useState(true)
  // return (
  //   <div className="single-tour">
  //     <div className="tour-price">{price}</div>
  //     <img src={image} alt={name} className="img" />

  //     <div className="tour-info">
  //       <h5>{name}</h5>
  //       <p className={isHideInfo ? 'hide-info' : ''}>{info}</p>
  //       <button
  //         type="button"
  //         className="info-btn"
  //         onClick={() => {
  //           setIsHideInfo(!isHideInfo)
  //         }}
  //       >
  //         Read More
  //       </button>
  //       <button
  //         type="button"
  //         className="btn delete-btn"
  //         onClick={() => {
  //           removeTour(id)
  //         }}
  //       >
  //         Not Intesrested
  //       </button>
  //     </div>
  //   </div>
  // )

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isHideInfo ? `${info.substring(0, 200)}...` : info}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setIsHideInfo(!isHideInfo)
            }}
          >
            {isHideInfo ? 'Read More' : 'Show Less'}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => {
            removeTour(id)
          }}
        >
          Not Intesrested
        </button>
      </div>
    </article>
  )
}

export default Tour
