import React from 'react'

export default function Lastrow() {
  return (
    <div style={{
        display: 'flex',
    flexWrap: 'wrap',
    }}>
            <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
             backgroundColor: 'blue',
             margin:'20px',
            }}></div>

               <div style={{
              width: '400px',
              height: '150px',
              backgroundColor: 'red',
                padding:'10px',
             margin:'20px'
            }}></div>

                <div style={{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    margin:'20px',
    }}></div>
      
    </div>
  )
}
