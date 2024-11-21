import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Soyez les Bienvenue au <span className="text-yellow-400">ZTF Awards 2024</span>
      </h1>

      {/* Sous-titre */}
      <p className="text-lg mb-10 text-center max-w-2xl">
        {/*Célébrons ensemble les talents musicaux qui inspirent et touchent nos cœurs. 
        Découvrez les meilleurs artistes, chansons et moments marquants de l'année.*/}
      </p>

      {/* Conteneur des boutons */}
      <div className="flex flex-col items-center space-y-4">
        {/* Boutons d'action */}
        <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64">
          <Link href="/program">Planning du ZTF Awards</Link>
        </button>
        <button className="bg-white text-blue-900 px-6 py-6 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64">
  <Link href="/recueil">Recueil Musical</Link>
</button>

      </div>
    </div>
  );
}
