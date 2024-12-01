'use client';

import Link from 'next/link';
import { Song } from '../../../models/Song';
import { useEffect, useState } from 'react';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]); // État pour stocker les chansons

  const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête GET à l'API pour récupérer le tableau de chansons
        const response = await fetch(process.env.NEXT_PUBLIC_ZTF_AWARD_URL + '/api/songs');
        if (response.ok) {
          const data: Song[] = await response.json();
          data.sort((a: Song, b: Song) => a.title.localeCompare(b.title));
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
    <div style={{ fontFamily: "'Cinzel', serif" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#131857',
          position: 'relative', // Nécessaire pour placer les étoiles en absolu
          overflow: 'hidden',
        }}
        className="text-white p-6 shadow w-full"
      >
        {/* Animation des étoiles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 5 + 2}s infinite ease-in-out`,
              }}
            ></div>
          ))}
        </div>

        {/* Contenu du header */}
        <div className="text-center relative z-10">
          {boolState ? (
            <>
              <h1>
                <span className="text-5xl text-white font-lavishly font-bold">SongBook</span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Bouton accueil */}
                <Link href="/welcome">
                  <button className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                    Home
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1>
                <span className="text-5xl text-white font-lavishly font-bold">Recueil Musical</span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Bouton accueil */}
                <Link href="/welcome">
                  <button className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadom sm:w-auto">
                    Accueil
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Liste des chansons */}
      <div className="container mx-auto p-4">
        <ul className="space-y-4">
          {songs.map((song) => (
            <li
              key={song.id}
              className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform"
              style={{
                borderColor: '#FFD700', // Jaune
              }}
            >
              <Link href={`/song/${song.id}`} className="block text-blue-600 hover:underline">
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold">{song.title}</span>
                  <span className="font-montserrat">{song.artist}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
