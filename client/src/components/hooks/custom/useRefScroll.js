import { useEffect, useRef, useState } from 'react';

function useRefScroll() {
  const scrollRef = useRef()
  const refTitle = useRef()

  const [eventScroll, setEventScroll] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // const modal = scrollRef?.current?.getBoundingClientRect()
      // const title = refTitle?.current?.getBoundingClientRect()
      // console.log(Math.round(title.y) >= 0 && Math.round(title.y) <= 500, "/", Math.round(title.y));
      // console.log(Math.round(title.y) >= 0 && Math.round(title.y) <= 100, "/", Math.round(title.y));
      // if (sessionStorage?.scroll) window.removeEventListener('scroll', handleScroll)
      // if (y < 90 && y > 80 && !sessionStorage?.scroll) {
      //   sessionStorage.scroll = true
      // }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [eventScroll])

  return { setEventScroll, eventScroll, scrollRef, refTitle }

}

export default useRefScroll;