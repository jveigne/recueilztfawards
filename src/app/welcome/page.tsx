'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
    const { boolState } = useBooleanContext();

    return (

        <>
            <div
                className="flex flex-col items-center justify-center text-white"
                style={{
                    backgroundColor: '#131857',
                    width: '100vw', // Largeur totale
                    height: '100vh', // Hauteur totale
                    margin: 0, // Suppression des marges
                    padding: 0, // Suppression des paddings
                    fontFamily: "'Cinzel', serif", // Application de la police cérémoniale sur tout le texte
                }}
            >
                {/* Titre principal */}
                <div>
                    {boolState ? (
                        <h1 className="text-5xl font-poiret font-bold text-4xl mb-6 text-center">
                            <strong>Welcome to the <br/><span
                                className="text-orange">ZTF Awards 2024</span></strong>
                        </h1>
                    ) : (
                        <>
                            <h1 className="text-7xl font-lavishly font-bold mb-6 text-center">Bienvenue</h1>
                            <h2 className="text-5xl font-lavishly font-bold mb-6 text-center">Aux</h2>
                            <h2 className="text-5xl font-montserrat font-bold mb-6 text-center text-orange">ZTF AWARDS 2024</h2>

                        </>
                        )}
                </div>

                {/* Sous-titre */}
                <p className="text-lg mb-10 text-center max-w-2xl">
                    {/* Ajoutez un sous-titre ici si nécessaire */}
                </p>

                {/* Conteneur des boutons */}
                <div className="flex flex-col items-center space-y-4">
                    {boolState ? (
                        <>
                            <Link href="/program">
                                <button
                                    className="bg-yellow-400 text-blue-900 px-6 py-1 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64">
                                    Programme of the Ceremony
                                </button>
                            </Link>

                            <Link href="/recueil">
                                <button
                                    className="bg-white text-blue-900 px-6 py-4 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64">
                                    Songbook
                                </button>
                            </Link>
                            <br/>
                            <Link href="/">
                                <button
                                    className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                    Back
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/program">
                                <button
                                    className="bg-orange text-blue-900 px-6 py-1 rounded-full font-montserrat font-semibold text-lg shadow hover:bg-yellow-500 w-64">
                                    Programme de la Cérémonie
                                </button>
                            </Link>

                            <Link href="/recueil">
                                <button
                                    className="bg-white text-blue-900 px-6 py-4 rounded-full font-montserrat font-semibold text-lg shadow hover:bg-gray-200 w-64">
                                    Recueil Musical
                                </button>
                            </Link>
                            <br/>
                            <Link href="/">
                                <button
                                    className="bg-white text-blue-900 px-4 py-2 rounded-full font-montserrat font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                    Retour
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
