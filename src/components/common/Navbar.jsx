import React from "react";

export default function Navbar() {
  return (
    <div className="h-[2vh]">
      <header className="flex items-center justify-between px-3">
        <img
          src="assets/logo-daaraayKocc.png"
          alt="Daaray Kocc"
          className="h-[150px] "
        />
        <nav className="flex flex-row mr-[50px]">
          <ul
            className="flex space-x-10 text-[20px] relative top-[-20px]"
            style={{ fontFamily: "Kavoon, cursive" }}
          >
            <li>
              <a href="#" className="text-white hover:text-yellow-300">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-300">
                Connexion
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-300">
                Inscription
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
