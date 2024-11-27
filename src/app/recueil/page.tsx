'use client';

import Link from 'next/link';
import { Song } from '../../../models/Song';
import { useEffect, useState } from 'react';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]); // État pour stocker les chansons

  const { boolState} = useBooleanContext(); //reccupère le contexte de la langue fr/en

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête GET à l'API pour récupérer le tableau de chansons
        const response = await fetch(process.env.NEXT_PUBLIC_ZTF_AWARD_URL+'/api/songs');
        if (response.ok) {
          const data: Song[] = await response.json();
          data.sort((a: Song, b: Song) => a.title.localeCompare(b.title))
          setSongs(data);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow w-full">
        <div className="text-center">
          {
            boolState ?
                <>
                  <h1 className="text-3xl font-bold mb-4"><span className="text-yellow-400">Musical collection</span>
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Bouton accueil */}
                    <button
                        className="bg-blue-500 text-white px-12 py-4 rounded-lg shadow hover:bg-blue-600 w-full sm:w-auto">
                      <Link href="/">Home</Link>
                    </button>
                  </div>
                </>
                :
                <>
                  <h1 className="text-3xl font-bold mb-4"><span className="text-yellow-400">Recueil Musical</span></h1>
                  <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Bouton accueil */}
                    <button
                        className="bg-blue-500 text-white px-12 py-4 rounded-lg shadow hover:bg-blue-600 w-full sm:w-auto">
                      <Link href="/">Accueil</Link>
                    </button>
                  </div>
                </>
          }

        </div>
      </header>
      {/* Liste des chansons */}
      <div className="container mx-auto p-4">
        <ul className="space-y-4">
          {songs.map(song => (
              <li
                  key={song.id}
                  className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
                  style={{
                    borderColor: "#FFD700", // Jaune
              }}
            >
              <Link href={`/song/${song.id}`} className="block text-blue-600 hover:underline">
                <div className="flex flex-col">
                  <span className="font-semibold">{song.title}</span>
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
