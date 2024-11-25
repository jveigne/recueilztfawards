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
                const response = await fetch(process.env.NEXT_PUBLIC_ZTF_AWARD_URL+'/api/songs');
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
        return (<>
                <div><p>Chargement...</p></div>
                <div className="mt-8">
                    <Link href="/recueil" className="text-blue-600 hover:underline">
                        Retour à la liste des chansons
                    </Link>
                </div>
            </>
    );
    }

    const currentIndex = songs.findIndex((s) => s.id === songId);
    const prevSong = songs[currentIndex - 1];
    const nextSong = songs[currentIndex + 1];

    // Formater les paroles avec une séparation pour le refrain
    const formatLyrics = (lyrics: string) => {
        return lyrics.split('\n').map((line, index) => {
            // Détecter le refrain pour lui appliquer un style différent
            if (line.toLowerCase().includes('refrain') || line.toLowerCase().includes('chorus')) {
                return (
                    <p key={index} className="text-center font-semibold text-lg my-4 italic text-blue-600">
                        {line}
                    </p>
                );
            }
            // Normal text for other parts of the lyrics
            return <p key={index} className="my-2 text-lg">{line}</p>;
        });
    };

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
            <h1 className="text-3xl font-bold mb-4">{song.id}- {song.title}</h1>
            <h2 className="text-xl mb-4">{song.artist}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* French Lyrics */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-500 mb-4">Version Française</h2>
                    <div className="space-y-4 text-gray-500">
                        <p>
                            Ô Cameroun berceau de nos ancêtres,<br/>
                            Va debout et jaloux de ta liberté.<br/>
                            Comme un soleil ton drapeau fier doit être<br/>
                            Un symbole ardent de foi et d'unité.<br/>
                            Que tous tes enfants du nord au sud,<br/>
                            de l'est à l'ouest soient tout amour,<br/>
                            Te servir que ce soit leur seul but,<br/>
                            Pour remplir leur devoir toujours.
                        </p>
                        <p className="font-semibold text-center">Refrain:</p>
                        <p className="italic">
                            Chère patrie, terre chérie,<br/>
                            Tu es notre seul et vrai bonheur,<br/>
                            notre joie et notre vie,<br/>
                            À toi l'amour et le grand honneur.
                        </p>
                        <p>
                            Tu es la tombe où dorment nos pères,<br/>
                            Le jardin que nos aïeux ont cultivé.<br/>
                            Nous travaillons pour te rendre prospère,<br/>
                            Un beau jour enfin nous serons arrivés.<br/>
                            De l'Afrique sois fidèle enfant<br/>
                            Et progresse toujours en paix,<br/>
                            Espérant que tes jeunes enfants<br/>
                            T'aimeront sans bornes à jamais.
                        </p>
                    </div>
                </div>

                {/* English Lyrics */}
                <div>
                    <h2 className="text-xl font-semibold text-red-500 mb-4">English Version</h2>
                    <div className="space-y-4 text-gray-500">
                        <p>
                            O Cameroon, Thou Cradle of our Fathers,<br/>
                            Holy Shrine where in our midst they now repose,<br/>
                            Their tears and blood and sweat thy soil did water,<br/>
                            On thy hills and valleys once their tillage rose.<br/>
                            Dear Fatherland, thy worth no tongue can tell!<br/>
                            How can we ever pay thy due?<br/>
                            Thy welfare we will win in toil and love and peace,<br/>
                            Will be to thy name ever true!
                        </p>
                        <p className="font-semibold text-center">Chorus:</p>
                        <p className="italic">
                            Land of Promise, land of Glory!<br/>
                            Thou, of life and joy, our only store!<br/>
                            Thine be honour, thine emotion,<br/>
                            And deep endearment, for evermore.
                        </p>
                        <p>
                            From Shari, from where the Mungo meanders<br/>
                            From along the banks of lowly Boumba Stream,<br/>
                            Muster thy sons in union close around thee,<br/>
                            Mighty as the Buea Mountain be their team;<br/>
                            Instil in them the love of gentle ways,<br/>
                            Regret for errors of the past;<br/>
                            Foster, for Mother Africa, a loyalty<br/>
                            That true shall remain to the last.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link href="/recueil" className="text-blue-600 hover:underline">
                    Retour à la liste des chansons
                </Link>
            </div>
        </div>
    );
}