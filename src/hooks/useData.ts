import { useEffect, useState } from 'react'

export function useData(url = 'shows.json') {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}
