import Link from 'next/link'

// Simulons une base de données de chansons
const songs = [
  { id: 1, title: "La Femme Samaritaine", artist: "Spiritual Songs" },
  { id: 2, title: "Où est Ton Trésor", artist: "Spiritual Songs"  },
  { id: 3, title: "Be Thou My Vision", artist: "Spiritual Songs"  },
  { id: 4, title: "Une chose m'inquiète", artist: "Spiritual Songs"  },
  { id: 5, title: "Dieu fait Toutes Choses Nouvelles", artist: "Spiritual Songs"  },
]

export default function Home() {
  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Recueil Musical ZTF Awards 2024</h1>
        <ul className="space-y-2">
          {songs.map((song) => (
              <li key={song.id} className="bg-white shadow rounded-lg p-4">
                <Link href={`/song/${song.id}`} className="text-blue-600 hover:underline">
                  <span className="font-semibold">{song.title}</span> - {song.artist}
                </Link>
              </li>
          ))}
        </ul>
      </div>
  )
}
