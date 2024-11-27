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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">

        <br/>
        {/* Sous-titre */}
        <p className="text-lg mb-10 text-center max-w-2xl">
            {/*Célébrons ensemble les talents musicaux qui inspirent et touchent nos cœurs.
        Découvrez les meilleurs artistes, chansons et moments marquants de l'année.*/}
        </p>

        {/* Conteneur des boutons */}
        <div className="flex flex-col items-center space-y-4">
            {/* Boutons d'action */}
            <button
                onClick={setFalse}
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64">
                <Link href="/welcome">Français</Link> 🇫🇷
            </button>
            <button
                onClick={setTrue} className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64">
                <Link href="/welcome">English</Link> 🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </button>

        </div>
    </div>
  );
}
