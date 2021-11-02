import {useState, useEffect, useRef} from 'react'

export default function useNearScreen(){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef();
  
  
    useEffect(function() {
      const onChange = (entries, observer) => {
        const el = entries[0]
        if (el.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      }
      
      const observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'  
      })
  
      observer.observe(fromRef.current)
      
      return () => observer.disconnect()
    })
  
    return {isNearScreen, fromRef}
  }