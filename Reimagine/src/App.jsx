import { useState } from 'react'
import { TabsDemo } from './ui/UseTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TabsDemo/>
    {/* <h2 className='text-red font-serif'>jii</h2> */}
    </>
  )
}

export default App
