import React from 'react'
import Rectangle from './Rectangle'
import Circle from './Circle'
import Square from './Square'
import Middlerow from './Middlerow'

export default function Firstrow() {
  return (
    <div style={{
        display: 'flex',
    flexWrap: 'wrap',
    padding:'5px',
    margin:'5px'
    }}>
        <Rectangle/>
        <Circle/>
        <Square/>
        <div style={{
              width: '300px',
              height: '150px',
              backgroundColor: 'blue',
                padding:'5px',
             margin:'5px'
            }}></div>
        <Middlerow/>
    </div>
  )
}
