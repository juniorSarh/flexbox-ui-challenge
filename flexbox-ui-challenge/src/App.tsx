import { useState } from 'react'
import './App.css'
import Lastrow from './components/Lastrow'
import Thirdrow from './components/Thirdrow'
import Firstrow from './components/Firstrow'

function App() {


  return (
    <>
  <main
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '10px',
    border: '5px solid red',
    borderRadius: '10px',
    padding: '5px',
    maxWidth: '73%', 
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
