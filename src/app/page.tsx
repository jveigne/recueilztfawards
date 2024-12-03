'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function Home() {
    const { setBoolState } = useBooleanContext();
    const router = useRouter();

    const setTrue = () => {
        setBoolState(true); // Bascule l'état
        router.push('/welcome'); // Redirige vers une autre page
    };
    const setFalse = () => {
        setBoolState(false); // Bascule l'état
        router.push('/welcome'); // Redirige vers une autre page
    };

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
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none"></div>

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

                {/* Image "toge" avec animation */}
                <div className="relative z-30">
                    <img
                        src="/images/toge.png"
                        alt="Toge"
                        className="w-48 h-48 object-contain animate-float-pulse" // Animation appliquée à "toge.png"
                        style={{ marginBottom: '-150px' }} // Rapproche l'image du logo
                    />
                </div>

                {/* Logo animé avec pulsation */}
                <div className="relative z-20 text-center">
                    <img
                        src="/images/logorouge.png"
                        alt="ZTF Logo"
                        className="w-96 h-96 object-contain animate-float-pulse" // Animation appliquée au logo
                    />
                </div>

                {/* Boutons interactifs */}
                <div className="relative z-20 flex flex-col items-center space-y-4 mt-8">
                    {/* Bouton Français */}
                    <button onClick={setFalse}
                            className="flex items-center justify-center bg-orange text-blue-900 px-6 py-3 rounded-lg font-montserrat font-semibold  text-3xs shadow w-64 space-x-2">
                        <Link href="/welcome" className="flex items-center">
                            <span className="text-roboto">Français</span>
                        </Link>
                        <img
                            src="/images/france.png"
                            alt="France"
                            className="w-6 h-4 object-contain"
                        />
                    </button>

                    {/* Bouton English */}
                    <button onClick={setTrue}
                            className="flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-lg font-montserrat font-semibold  text-3xs shadow w-64 space-x-2">
                        <Link href="/welcome" className="flex items-center">
                            <span className="text-roboto">English</span>
                        </Link>
                        <img
                            src="/images/england.png"
                            alt="England"
                            className="w-6 h-4 object-contain"
                        />
                    </button>
                </div>


            </div>

            {/* Animation CSS */}
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
