import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Daaray Kocc</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <div className="min-h-screen font-sans bg-gradient-to-r from-daaray-header via-daaray-primary to-daaray-secondary">
        <header className="flex items-center justify-between px-6 py-4">
          <img src="https://placehold.co/200x50.png" alt="Daaray Kocc logo placeholder" className="h-12" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-daaray-header text-daaray-text">À propos de nous</a></li>
              <li><a href="#" className="hover:text-daaray-header text-daaray-text">Connexion</a></li>
              <li><a href="#" className="hover:text-daaray-header text-daaray-text">Inscription</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex items-center justify-center h-screen">
          <div className="p-6 mr-10 rounded-lg shadow-lg bg-daaray-primary">
            <h2 className="mb-2 text-2xl font-bold text-daaray-text">TEXT</h2>
            <p className="mb-4 text-daaray-text">TEXT</p>
            <p className="text-sm text-daaray-text">
              diam nisi sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat. Vestibulum ante ipsum primis
            </p>
            <button className="px-4 py-2 mt-4 text-white rounded-full bg-daaray-accent hover:bg-red-600">Je m'inscris</button>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-daaray-secondary">
            <p className="mb-2 text-2xl font-bold text-daaray-text">IMAGE</p>
          </div>
        </main>

        <footer className="py-6 text-xs text-center text-daaray-footer">
          ©2024 - daaraay kocc <i className="fas fa-heart text-daaray-accent"></i>
        </footer>
      </div>
    </>
  );
}
