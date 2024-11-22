import Link from 'next/link'
import {db} from '../../lib/firebase'
import { collection, getDocs } from "firebase/firestore";
import { Song } from '../../models/Song';
import { SongConverter } from '../../models/converter';


let songs: Song[] = [];

async function getSongs() {

    try {
        // Récupérer les données de Firestore

        const querySnapshot = await getDocs(collection(db, 'songs').withConverter(SongConverter));
        songs = querySnapshot.docs.map((doc) => doc.data());

    } catch (error) {
        console.error('Erreur lors de la récupération des chansons :', error);
    }
}

export default async function Home() {

    getSongs();

    // Envoi du tableau de chansons à l'API via POST
    await fetch(process.env.URL + '/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ songs }),
    });

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
