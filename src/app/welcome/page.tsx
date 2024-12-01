'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {
    const { boolState } = useBooleanContext();

    return (
        <>
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


                <div
    className="absolute inset-0 flex items-center justify-center z-0"
    style={{
        opacity: 0.2,
        top: '-100px', // Ajuste la position verticale
        pointerEvents: 'none',
        transform: 'translateY(-50px)', // Décale l'image vers le haut de 50px
    }}
>
    <img
        src="/images/toge_.png"
        alt="Filigrane"
        className="w-[120%] h-auto max-w-screen-md"
    />
</div>


                

                {/* Positionner l'image colombe un peu plus bas avec un délai de 2 secondes */}
                <div className="absolute top-3 z-30 animate-colombe-fade-in">
                    <img
                        src="/images/colombe.png"
                        alt="Colombe"
                        className="w-32 h-32 object-contain" // Ajustez la taille de l'image si nécessaire
                    />
                </div>

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Titre principal */}
                    <div>
                        
                        {boolState ? (
                            <>
                                <h1 className="text-7xl font-roboto font-bold mb-6 text-center animate-fade-in">Welcome</h1>
                                <h2 className="text-5xl font-roboto font-bold mb-6 text-center animate-fade-in">To
                                    the</h2>
                                <h2 className="text-4xl font-montserrat font-bold mb-6 text-center text-orange animate-fade-in">
                                    ZTF AWARDS 2024
                                </h2>
                            </>
                        ) : (
                            <>
                                <h1 className="text-7xl font-roboto font-bold mb-6 text-center animate-fade-in">Bienvenue</h1>
                                <h2 className="text-5xl font-roboto font-bold mb-6 text-center animate-fade-in">Aux</h2>
                                <h1 className="text-4xl font-montserrat font-bold mb-6 text-center text-orange animate-fade-in">
                                    ZTF AWARDS 2024
                                </h1>
                            </>
                        )}
                    </div>
                    
                    <br/><br/><br/>
                    {/* Conteneur des boutons */}
                    <div className="flex flex-col items-center space-y-4">
                        {boolState ? (
                            <>
                                <Link href="/program">
                                    <button
                                        className="bg-orange text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow w-64">
                                        Programme of the Ceremony
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow w-64">
                                        Songbook
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button
                                        className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow w-40">
                                        Back
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/program">
                                    <button
                                        className="bg-orange text-blue-900 px-6 py-1 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow w-64">
                                        Programme de la Cérémonie
                                    </button>
                                </Link>

                                <Link href="/recueil">
                                    <button
                                        className="bg-white text-blue-900 px-6 py-4 rounded-lg btn-transition font-montserrat font-semibold text-3xs shadow w-64">
                                        Recueil Musical
                                    </button>
                                </Link>
                                <Link href="/"><br/>
                                    <button
                                        className="bg-white text-blue-900 px-4 py-2 rounded-lg btn-transition font-montserrat font-semibold text-sm shadow w-40">
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
        </>
    );
}
