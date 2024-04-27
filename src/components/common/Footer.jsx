import React from "react";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-6 text-xs text-center text-white text-[18px] flex items-center justify-center italic">
            <span style={{ fontFamily: "Kavoon, cursive" }}>
                ©2024 - daaraay kocc
            </span>
            <img src="/assets/senegal.png" alt="Senegal Flag" className="w-[20px] ml-3" />
        </footer>
    );
}
