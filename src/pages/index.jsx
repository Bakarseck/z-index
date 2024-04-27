import { useSession } from "@/lib/useSession";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function HomePage() {

  const user = useSession();
  const router = useRouter();
  
  if (user) {
    router.push('/home');
  }
  
  return (
    <>
      <Head>
        <title>Daaray Kocc</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="min-h-screen font-sans w-[90%] m-[5%] border-2 border-yellow-300  bg-opacity-10 shadow-lg backdrop-blur-100  rounded-lg">
        <header className="flex items-center justify-between px-6 py-4">
          <img
            src="assets/logo-daaraayKocc.png"
            alt="Daaray Kocc"
            className="h-[100px]"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  Connexion
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  Inscription
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex items-center justify-center h-screen">
          <div className="p-6 mr-10 text-black bg-yellow-400 rounded-lg shadow-lg w-[500px]">
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

          <div className="p-6 text-black rounded-lg shadow-md">
            <img src="assets/landing.PNG" className="rounded-lg w-96" />
          </div>
        </main>
      </div>
      <footer className="py-6 text-xs text-center text-white">
        ©2024 - daaraay kocc <i className="text-red-500 fas fa-heart"></i>
      </footer>
    </>
  );
}
