import Link from 'next/link';
import { Song } from '../../../models/Song';
import {collection, getDocs } from 'firebase/firestore';
import { SongConverter } from '../../../models/converter';
import { db } from '../../../lib/firebase';


let songs: Song[] = [];

async function getSongs() {

  try {
    // Récupérer les données de Firestore

    const querySnapshot = await getDocs(collection(db, 'songs').withConverter(SongConverter));
    songs = querySnapshot.docs.map((doc) => doc.data());
    console.log(songs)

  } catch (error) {
    console.error('Erreur lors de la récupération des chansons :', error);
  }
}

export default async function Home() {

  getSongs();

  // Envoi du tableau de chansons à l'API via POST
  await fetch(process.env.ZTF_AWARD_URL + '/api/songs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ songs }),
  });
  
  console.log("donnée envoyé")


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
          {songs.map((song) => (
            <li
              key={song.id}
              className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: "#FFD700", // Jaune
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
