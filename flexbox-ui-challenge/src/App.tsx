import { useState } from 'react'
import './App.css'
import Rectangle from './components/Rectangle'
import Square from './components/Square'
import Circle from './components/Circle'
import Lastrow from './components/Lastrow'
import Middlerow from './components/Middlerow'
import Thirdrow from './components/Thirdrow'
import Firstrow from './components/Firstrow'

function App() {


  return (
    <>
  <main
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '10px',
    border: '5px solid red',
    borderRadius: '10px',
    padding: '5px',
    maxWidth: '75%', // Adjust based on item width
    margin: '0 auto',
    backgroundColor:'whitesmoke'
  }}
>
  <Firstrow/>
  <Thirdrow/>
  <Lastrow />
</main>      
    </>
  )
}

export default App
