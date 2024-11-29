'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
    const { boolState } = useBooleanContext();

    return (
        <>
            {/* Conteneur principal */}
            <div
                className="relative flex flex-col items-center justify-center text-white animated-gradient"
                style={{
                    backgroundColor: '#131857', // Couleur de fond d'origine
                    width: '100vw',
                    height: '100vh',
                    margin: 0,
                    padding: 0,
                    fontFamily: "'Cinzel', serif",
                }}
            >
                {/* Positionner l'image colombe un peu plus bas avec un délai de 2 secondes */}
                <div className="absolute top-24 z-30 animate-colombe-fade-in">
                    <img
                        src="/images/colombe.png"
                        alt="Colombe"
                        className="w-32 h-32 object-contain" // Ajustez la taille de l'image si nécessaire
                    />
                </div>

                {/* Positionner l'image à gauche */}
                {/*<div className="absolute top-0 left-0 z-20">
                    <img
                        src="/images/gauche.png"
                        alt="Gauche"
                        className="w-24 h-24 object-contain" // Ajustez la taille de l'image si nécessaire
                    />
                </div>*/}

                {/* Positionner l'image à droite */}
                {/*<div className="absolute top-0 right-0 z-20">
                    <img
                        src="/images/droite.png"
                        alt="Droite"
                        className="w-24 h-24 object-contain" // Ajustez la taille de l'image si nécessaire
                    />
                </div>*/}

                {/* Image en filigrane */}
                {/*<div className="parallax" style={{ backgroundImage: `url('/images/fr_zack.jpg')` }}></div>*/}

                {/* Étoiles animées */}
                <div className="stars"></div>

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Titre principal */}
                    <div>
                        {boolState ? (
                            <>
                                <h1 className="text-7xl font-lavishly font-bold mb-6 text-center animate-fade-in">Welcome</h1>
                                <h2 className="text-5xl font-lavishly font-bold mb-6 text-center animate-fade-in">To the</h2>
                                <h2 className="text-4xl font-montserrat font-bold mb-6 text-center text-orange animate-fade-in">
                                    ZTF AWARDS 2024
                                </h2>
                            </>
                        ) : (
                            <>
                                <h1 className="text-7xl font-lavishly font-bold mb-6 text-center animate-fade-in">Bienvenue</h1>
                                <h2 className="text-5xl font-lavishly font-bold mb-6 text-center animate-fade-in">Aux</h2>
                                <h2 className="text-4xl font-montserrat font-bold mb-6 text-center text-orange animate-fade-in">
                                    ZTF AWARDS 2024
                                </h2>
                            </>
                        )}
                    </div>
                            <br/><br/><br/>
                    {/* Conteneur des boutons */}
                    <div className="flex flex-col items-center space-y-4">
                        {boolState ? (
                            <>
                                <Link href="/program">
                                    <button className="bg-orange text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Programme of the Ceremony
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-gray-200 w-64">
                                        Songbook
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                        Back
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/program">
                                    <button className="bg-orange text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Programme de la Cérémonie
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-gray-200 w-64">
                                        Recueil Musical
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                        Retour
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Styles globaux */}
            <style jsx>{`
                /* Animation du ciel étoilé */
                .stars {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('/images/stars.png') repeat;
                    animation: moveStars 50s linear infinite;
                    z-index: -2;
                }

                @keyframes moveStars {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(-100%, 0);
                    }
                }

                /* Animation d'apparition avec fondu */
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 1.5s ease-out forwards;
                }

                /* Animation d'apparition de la colombe avec un délai de 2 secondes */
                @keyframes colombeFadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .animate-colombe-fade-in {
                    animation: colombeFadeIn 1.5s ease-out forwards;
                    animation-delay: 0.1s; /* délai de 2 secondes */
                }

                /* Transition des boutons */
                .btn-transition {
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .btn-transition:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </>
    );
}
