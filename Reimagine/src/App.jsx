import { useState } from 'react'
import { TabsDemo } from './ui/UseTab'
import {WavyBackgroundDemo} from './component/wavyback'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TabsDemo/> */}
    <WavyBackgroundDemo/>
    {/* <h2 className='text-red font-serif'>jii</h2> */}
    </>
  )
}

export default App
