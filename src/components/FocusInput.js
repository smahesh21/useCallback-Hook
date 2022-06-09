import {useEffect, useRef} from 'react'

function FocusInput() {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <h4>useRef Hook</h4>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput
