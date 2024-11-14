'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const songs = [
    { id: 1, title: "La Femme Samaritaine", artist: "Spiritual Songs", lyrics: "Il m'a dit tout ce que j'ai fais" },
    { id: 2, title: "Où est Ton Trésor", artist: "Spiritual Songs", lyrics: "où est ton trésor? là sera ton coeur" },
    { id: 3, title: "Be Thou My Vision", artist: "Spiritual Songs", lyrics: "God I love you" },
    { id: 4, title: "Une chose m'inquiète", artist: "Spiritual Songs", lyrics: "Une chose m'inquiète c'est que j'ai beaucoup d'argent" },
    { id: 5, title: "Dieu fait Toutes Choses Nouvelles", artist: "Spiritual Songs", lyrics: "Dieu fait toutes choses nouvelles" },
];

// Définir `params` comme une promesse
type Params = Promise<{ id: string }>;

export default function SongPage({ params }: { params: Params }) {
    // Utiliser `use` pour résoudre la promesse côté client
    const resolvedParams = use(params);
    const songId = parseInt(resolvedParams.id, 10);

    const router = useRouter();
    const song = songs.find((s) => s.id === songId);

    if (!song) {
        return <div>Chanson non trouvée</div>;
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
