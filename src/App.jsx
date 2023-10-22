const url = 'https://course-api.com/react-tours-project'
import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Loading from './components/Loading'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoadinng, setIsLoading] = useState(false)

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoadinng) {
    return <Loading />
  } else {
    return (
      <>
        <h1 className="title title-underlin">our tour </h1>
        {tours.length < 1 ? (
          <button type="button" className="info-btn btn" onClick={fetchData}>
            Re-Fetching
          </button>
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </>
    )
  }
}
export default App
