import React from 'react'

export default function Thirdrow() {
  return (
     <div style={{
        display: 'flex',
    flexWrap: 'wrap',
    }}>
           <div style={{
              width: '300px',
              height: '150px',
              backgroundColor: 'blue',
                padding:'10px',
             margin:'20px'
            }}></div>
            <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
             backgroundColor: 'skyblue',
             margin:'20px',
            }}></div>
             <div style={{
              width: '300px',
              height: '150px',
              backgroundColor: 'orange',
                padding:'10px',
             margin:'20px'
            }}></div>
    </div>
  )
}
