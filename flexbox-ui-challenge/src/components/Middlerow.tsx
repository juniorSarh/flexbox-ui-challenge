import React from "react";

export default function Middlerow() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: 12,
      }}
    >
      <div style={{ width: 300, height: 150, backgroundColor: "skyblue" }} />
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundColor: "red",
        }}
      />
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundColor: "skyblue",
        }}
      />
    </div>
  );
}
