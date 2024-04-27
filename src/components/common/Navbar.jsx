"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="h-[2vh]">
      <header className="flex items-center justify-between px-3">
        <Link href="/">
          <img
            src="../assets/logo-daaraayKocc.png"
            alt="Daaray Kocc"
            className="h-[150px] "
          />
        </Link>
        {router.asPath === "/" ? (
          <nav className="flex flex-row mr-[50px]">
            <ul
              className="flex space-x-10 text-[20px] relative top-[-20px]"
              style={{ fontFamily: "Kavoon, cursive" }}
            >
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-white hover:text-yellow-300">
                    À propos de nous
                  </a>
                </Link>
              </li>
                  <li>
                    <Link href="/auth/register" legacyBehavior>
                      <a className="text-white hover:text-yellow-300">
                        Inscription
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/login" legacyBehavior>
                      <a className="text-white hover:text-yellow-300">
                        Connexion
                      </a>
                    </Link>
                  </li>
             
            </ul>
          </nav>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}
