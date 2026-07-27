import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Index from './pages/Index'
import bgImage from "./assets/netflixBg.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-black relative text-white'>
        <div>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/80"></div>
        <Index />
      </div>

    </>
  )
}

export default App
