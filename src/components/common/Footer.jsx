import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-xs text-center text-white h-[10vh] text-[22px] flex flex-row justify-center italic">
      <span style={{ fontFamily: "Kavoon, cursive" }}>
        ©2024 - daaraay kocc
      </span>
      <img src="../assets/senegal.png" className="w-[20px] ml-3" />
    </footer>
  );
}
