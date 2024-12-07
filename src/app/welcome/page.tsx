'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
    const { boolState } = useBooleanContext();

    return (
        <>
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

                /* Animation du logo et "toge.png" (flottement et pulsation) */
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes pulse {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                .animate-float-pulse {
                    animation: float 3s ease-in-out infinite, pulse 2s ease-in-out infinite;
                }
            `}</style>
            {/* Conteneur principal */}
            <div
                className="relative flex flex-col items-center justify-center h-screen"
                style={{
                    background: 'linear-gradient(135deg, #131857, #1a215e 50%, #202d73)',
                    color: 'white',
                    width: '100vw',
                    height: '100vh',
                    margin: 0,
                    padding: 0,
                }}
                
            >
                
                {/* Effet lumineux */}
                <div
                    className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none"></div>
                {/* Ajout d'étoiles */}
                <div className="absolute inset-0 overflow-hidden z-10">
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
                

                {/* Positionner l'image colombe un peu plus bas avec un délai de 2 secondes */}
                <div className="absolute top-4 z-40 animate-colombe-fade-in">
                    <img
                        src="/images/colombe.png"
                        alt="Colombe"
                        className="w-32 h-32 object-contain" // Ajustez la taille de l'image si nécessaire
                    />
                </div>
                
                <div
    className="absolute inset-0 flex items-center justify-center z-0"
    style={{
        opacity: 0.2,
        pointerEvents: 'none',
        transform: 'translateY(-180px)', // Décale l'image vers le haut de 50px
    }}
>
    <img
        src="/images/toge_.png"
        alt="Filigrane"
        className="w-[120%] h-auto max-w-screen-md"
    />
</div>


                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Titre principal */}
                    <div>
                        {boolState ? (
                            <>
                                <h1 className="text-7xl font-lavishly font-bold mb-6 text-center animate-fade-in">Welcome</h1>
                                <h2 className="text-5xl font-lavishly font-bold mb-6 text-center animate-fade-in">To
                                    the</h2>
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
                                <Link href="/speakers">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Speakers
                                    </button>
                                </Link>

                                <Link href="/program">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Programme of the Ceremony
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Songbook
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button
                                        className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                        Back
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>

                                <Link href="/speakers">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Intervenants
                                    </button>
                                </Link>

                                <Link href="/program">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Programme de la Cérémonie
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow hover:bg-yellow-500 w-64">
                                        Recueil Musical
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button
                                        className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow hover:bg-gray-200 w-40">
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
