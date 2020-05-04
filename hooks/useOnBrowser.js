import {useEffect, useState} from 'react'

const useOnBrowser = () => {
  const [onBrowser, setOnBrowser] = useState(false)
  useEffect(() => {
    if(window && window.document){
      setOnBrowser(true)
    }
  }, [typeof window])

  return onBrowser
}

export default useOnBrowser