import { useCallback, useState } from 'react'

export function useCount(initialCount: number) {
  const [count, setCount] = useState(initialCount)

  const handleIncrementCount = useCallback(() => {
    setCount((state) => state + 1)
  }, [])

  const handleDecrementCount = useCallback(() => {
    setCount((state) => state - 1)
  }, [])

  return [count, handleIncrementCount, handleDecrementCount]
}
