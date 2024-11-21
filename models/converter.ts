import {DocumentData, FirestoreDataConverter, QueryDocumentSnapshot } from "firebase/firestore"
import { Song } from "./Song"

export const SongConverter: FirestoreDataConverter<Song> = {
    toFirestore: (song: Song): DocumentData => {
        return {
            id: song.id,
            title: song.title,
            artist: song.artist,
            lyrics: song.lyrics,
        }
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): Song => {
        const data = snapshot.data()!
        return {
            id: data.id,
            title: data.title,
            artist: data.artist,
            lyrics: data.lyrics,
        }
    },
}