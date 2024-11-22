import {collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebase";
import { SongConverter } from "../../models/converter";



export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { songs } = req.body;

        // Validation des données
        if (!Array.isArray(songs) || songs.some((song) => !song.id || !song.title || !song.artist || !song.lyrics)) {
            return res.status(400).json({ message: 'Format des données invalide.' });
        }

        // Stocker l'objet envoyé
       // songsData = songs;

        return res.status(200).json({ message: 'Chanson enregistrée avec succès.' });
    } else if (req.method === 'GET') {
        try {
            // Récupérer les données de Firestore
            const querySnapshot = await getDocs(collection(db, 'songs').withConverter(SongConverter));
            return res.json(querySnapshot.docs.map((doc) => doc.data()));
        } catch (error) {
            console.error('Erreur lors de la récupération des chansons :', error);
        }
    } else {
        return res.status(405).json({ message: 'Méthode non autorisée.' });
    }
}

export default handler