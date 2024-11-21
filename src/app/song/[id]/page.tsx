'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Song } from '../../../../models/Song';

// Définir `params` comme une promesse
type Params = Promise<{ id: string }>;

export default function SongPage({ params }: { params: Params }) {
    // Utiliser `use` pour résoudre la promesse côté client
    const resolvedParams = use(params);
    const songId = parseInt(resolvedParams.id, 10);

    const router = useRouter();

    const [songs, setSongs] = useState<Song[]>([]); // État pour stocker les chansons

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Requête GET à l'API pour récupérer le tableau de chansons
                const response = await fetch('/api/songs');
                if (response.ok) {
                    const data: Song[] = await response.json();
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


    const song = songs.find((s) => s.id === songId);

    if (!song) {
        return <div><p>Chargement...</p></div>;
    }

    const currentIndex = songs.findIndex((s) => s.id === songId);
    const prevSong = songs[currentIndex - 1];
    const nextSong = songs[currentIndex + 1];

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between">
                {prevSong && (
                    <button
                        onClick={() => router.push(`/song/${prevSong.id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Précédent
                    </button>
                )}
                {nextSong && (
                    <button
                        onClick={() => router.push(`/song/${nextSong.id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Suivant
                    </button>
                )}
            </div>
            <br />
            <h1 className="text-3xl font-bold mb-4">{song.title}</h1>
            <h2 className="text-xl mb-4">par {song.artist}</h2>
            <p className="whitespace-pre-line mb-6">{song.lyrics}</p>

            <div className="mt-8">
                <Link href="/" className="text-blue-600 hover:underline">
                    Retour à la liste des chansons
                </Link>
            </div>
        </div>
    );
}
