import Link from 'next/link';

// Simulons une base de données de chansons
const songs = [
  { id: 1, title: "La Femme Samaritaine", artist: "Spiritual Songs", category: "Louange" },
  { id: 2, title: "Où est Ton Trésor", artist: "Spiritual Songs", category: "prédication & Atelier" },
  { id: 3, title: "Be Thou My Vision", artist: "Spiritual Songs", category: "prédication & Atelier" },
  { id: 4, title: "Une chose m'inquiète", artist: "Spiritual Songs", category: "Louange" },
  { id: 5, title: "Dieu fait Toutes Choses Nouvelles", artist: "Spiritual Songs", category: "fin" },
];

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4"><span className="text-yellow-400">Recueil Musical</span></h1>
          <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Bouton accueil */}
            <button className="bg-blue-500 text-white px-12 py-4 rounded-lg shadow hover:bg-blue-600 w-full sm:w-auto">
              <Link href="/">Accueil</Link>
            </button>
          </div>
        </div>
      </header>

      {/* Liste des chansons */}
      <div className="container mx-auto p-4">
        <ul className="space-y-4">
          {songs.map((song, index) => (
            <li
              key={song.id}
              className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                borderColor:
                  song.category === "Louange"
                    ? "#FFD700" // Bleu
                    : song.category === "prédication & Atelier"
                    ? "#FFD700" // Vert
                    : song.category === "fin"
                    ? "#FFD700" // Rouge
                    : "#FFD700", // Jaune
              }}
            >
              <Link href={`/song/${song.id}`} className="block text-blue-600 hover:underline">
                <div className="flex flex-col">
                  <span className="font-semibold">{song.id}- {song.title}</span>
                  <span>{song.artist}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
