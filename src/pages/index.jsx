import { useSession } from "@/lib/useSession";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  const user = useSession();

  return (
    <>
      <Head>
        <title>Daaray Kocc</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="min-h-screen font-sans bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100">
        <header className="flex items-center justify-between px-6 py-4">
          <img
            src="https://placehold.co/200x50.png"
            alt="Daaray Kocc logo placeholder"
            className="h-12"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  À propos de nous
                </a>
              </li>
              <li>
                <Link href="/auth/login" legacyBehavior>
                  <a className="text-yellow-500 hover:text-yellow-600">
                    Connexion
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auth/register" legacyBehavior>
                  <a className="text-yellow-500 hover:text-yellow-600">
                    Register
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex items-center justify-center h-screen">
          <div className="p-6 mr-10 text-black bg-yellow-400 rounded-lg shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">TEXT</h2>
            <p className="mb-4">TEXT</p>
            <p className="text-sm">
              diam nisi sit amet erat. Duis semper. Duis arcu massa, scelerisque
              vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in
              risus volutpat. Vestibulum ante ipsum primis
            </p>
            <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-full hover:bg-red-600">
              Je m'inscris
            </button>
          </div>

          <div className="p-6 text-black bg-yellow-200 rounded-lg shadow-lg">
            <p className="mb-2 text-2xl font-bold">IMAGE</p>
          </div>
        </main>

        <footer className="py-6 text-xs text-center text-gray-600">
          ©2024 - daaraay kocc <i className="text-red-500 fas fa-heart"></i>
        </footer>
      </div>
    </>
  );
}
