import { useEffect, useState } from 'react'
import { fetchPoke } from '../service/fetch'
import { type PokeState } from '../types/PokeState'

const initialData = [{ id: '0', name: '', img: '', type: '' }]

export default function useGetPoke() {
  const [poke, setPoke] = useState<PokeState[]>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    fetchPoke()
      .then((res): void => {
        setPoke(res)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { poke, loading, error }
}