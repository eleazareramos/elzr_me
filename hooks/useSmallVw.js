import { useEffect, useState } from 'react'

const useSmallVw = () => {
  const [smallVw, setSmallVw] = useState(false)

  const handleResize = () => setSmallVw(window.innerWidth <= 800)
  useEffect(() => {
    if (window) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
    return () => window && window.removeEventListener('resize', handleResize)
  }, [typeof window])

  return smallVw
}

export default useSmallVw
