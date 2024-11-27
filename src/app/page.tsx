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

            <div
                className="flex flex-col items-center justify-center min-h-screen text-white"
                style={{
                    backgroundColor: '#131857',
                    width: '100vw', // Prend la largeur totale de la fenêtre
                    height: '100vh', // Prend la hauteur totale de la fenêtre
                    margin: 0, // Supprime les marges par défaut
                    padding: 0, // Supprime les espacements internes par défaut
                }}
            >
                <br/>
                {/* Sous-titre */}
                <p className="text-lg mb-10 text-center max-w-2xl">
                    {/* Célébrons ensemble les talents musicaux qui inspirent et touchent nos cœurs. */}
                </p>

                {/* Conteneur avec position relative pour gérer le filigrane et l'image */}
                <div className="relative mb-15 w-full flex justify-center items-center border-opacity-1000">
                    {/* Image principale au-dessus du filigrane */}
                    <img
                        src="/images/logorouge.png"
                        alt="ZTF Logo"
                        className="w-90 h-90 object-contain relative z-20" // L'image principale avec une z-index pour qu'elle soit au-dessus du filigrane
                    />
                </div>

                <br/>

                {/* Conteneur des boutons */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Bouton Français */}
                    <button
                        onClick={setFalse}
                        className="flex items-center justify-center bg-orange text-blue-900 px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64 space-x-2"
                        style={{fontFamily: "'Cinzel', serif"}} // Application de la police cérémoniale
                    >
                        {/* Texte Français */}
                        <Link href="/welcome" className="flex items-center">
                            <span className="text-roboto">Français</span>
                        </Link>
                        {/* Icône du drapeau français */}
                        <img
                            src="/images/france.png"
                            alt="France"
                            className="w-6 h-4 object-contain"/>
                    </button>

                    {/* Bouton English */}
                    <button
                        onClick={setTrue}
                        className="flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64 space-x-2"
                        style={{fontFamily: "'Cinzel', serif"}} // Application de la police cérémoniale
                    >
                        {/* Texte English */}
                        <Link href="/welcome" className="flex items-center">
                            <span className="text-roboto">English</span>
                        </Link>
                        {/* Icône du drapeau anglais */}
                        <img
                            src="/images/england.png"
                            alt="england"
                            className="w-6 h-4 object-contain"/>
                    </button>
                </div>

            </div>
        </>
    );
}
