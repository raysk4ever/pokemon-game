import { useState } from "react"
import { useEffect, useRef } from "react"

export default function useAudio(src, autoplay = false) {
  const audioRef = useRef()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audioRef.current = audio
    audio.autoplay = autoplay
  },[])

  function play() {
    audioRef.current.play()
  }

  return {
    play,
    loaded
  }
}