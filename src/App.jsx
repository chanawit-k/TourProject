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
      setTours(tours)
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoadinng) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tour left</h2>
          <div className="title-underline"></div>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={fetchData}
          >
            Re-Fetching
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
