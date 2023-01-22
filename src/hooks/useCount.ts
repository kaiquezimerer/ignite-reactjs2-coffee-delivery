import { useCallback, useState } from 'react'

type useCountType = [number, () => void, () => void, () => void]

export function useCount(initialCount: number): useCountType {
  const [count, setCount] = useState<number>(initialCount)

  const handleIncrementCount = useCallback(() => {
    setCount((state) => state + 1)
  }, [])

  const handleDecrementCount = useCallback(() => {
    setCount((state) => state - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(initialCount)
  }, [initialCount])

  return [count, reset, handleIncrementCount, handleDecrementCount]
}
