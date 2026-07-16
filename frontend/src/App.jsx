import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        OpenStream
        나마만의 스트리밍 플랫폼
        <button
          type="button"
          className="counter"
        >
          방송시작
        </button>
        <button
          type="button"
          className="counter"
        >
          방송보기
        </button>
      </section>
    </>
  )
}

export default App
