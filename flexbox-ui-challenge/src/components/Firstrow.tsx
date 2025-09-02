import React from "react";
import Middlerow from "./Middlerow";

export default function Firstrow() {
  
  const COL1 = "25%"; 
  const GAP = 16; 
  const ROW_H = 150; 

  return (
    <div
      style={{
        display: "flex",
        gap: GAP,
        padding: 12,
        margin: 12,
        background: "whitesmoke",
        alignItems: "stretch",
      }}
    >
      
      <div
        style={{
          flex: `0 0 ${COL1}`,
          minHeight: ROW_H * 2 + GAP, 
          backgroundColor: "orange",
          borderRadius: 8,
        }}
      />

      
      <div
        style={{
          flex: `0 0 calc(100% - ${COL1})`,
          display: "flex",
          flexDirection: "column",
          gap: GAP,
        }}
      >
        
        <div
          style={{
            display: "flex",
            gap: GAP,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          />
        
          <div style={{ width: 150, height: 150, backgroundColor: "red" }} />
          
          <div style={{ width: 300, height: 150, backgroundColor: "blue" }} />
        </div>
        <Middlerow />
      </div>
    </div>
  );
}
