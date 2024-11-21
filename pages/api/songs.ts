import { NextApiRequest, NextApiResponse } from "next";
import { Song } from "../../models/Song";


type Songs = {
    id: number;
    title: string;
    artist: string;
    lyrics: string;
};

let songsData: Song[] | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { songs } = req.body;

        // Validation des données
        if (!Array.isArray(songs) || songs.some((song) => !song.id || !song.title || !song.artist || !song.lyrics)) {
            return res.status(400).json({ message: 'Format des données invalide.' });
        }

        // Stocker l'objet envoyé
        songsData = songs;

        return res.status(200).json({ message: 'Chanson enregistrée avec succès.' });
    } else if (req.method === 'GET') {
        // Renvoyer le tableau de chansons
        if (songsData !== null && songsData.length > 0) {
            return res.status(200).json(songsData);
        } else {
            return res.status(404).json({ message: 'Aucune chanson trouvée.' });
        }
    } else {
        return res.status(405).json({ message: 'Méthode non autorisée.' });
    }
}