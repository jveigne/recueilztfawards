'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';

export default function Home() {

    const { boolState } = useBooleanContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      {/* Titre principal */}
        <div>

            {
                boolState ?
                    <>
                        <h1 className="text-5xl font-extrabold mb-6 text-center">
                            Welcome to the <span className="text-yellow-400">ZTF Awards 2024</span>
                        </h1>
                    </>
                    :
                    <>
                        <h1 className="text-5xl font-extrabold mb-6 text-center">
                            Bienvenue aux <span className="text-yellow-400">ZTF Awards 2024</span>
                        </h1>
                    </>
            }
        </div>
        {/* Sous-titre */}
        <p className="text-lg mb-10 text-center max-w-2xl">
            {/*Célébrons ensemble les talents musicaux qui inspirent et touchent nos cœurs.
        Découvrez les meilleurs artistes, chansons et moments marquants de l'année.*/}
        </p>

        {/* Conteneur des boutons */}
        <div className="flex flex-col items-center space-y-4">
            {/* Boutons d'action */}
            {
                boolState ?
                    <>
                        <Link href="/program">
                            <button
                                className="bg-yellow-400 text-blue-900 px-6 py-6 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64">
                                    Programme of the Ceremony
                            </button>
                        </Link>

                        <Link href="/recueil">
                            <button
                                className="bg-white text-blue-900 px-6 py-8 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64">
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
                    :
                    <>
                        <Link href="/program">
                            <button
                                className="bg-yellow-400 text-blue-900 px-6 py-6 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 w-64">
                                    Programme de la Cérémonie
                            </button>
                        </Link>


                        <Link href="/recueil">
                            <button
                                className="bg-white text-blue-900 px-6 py-8 rounded-full font-semibold text-lg shadow hover:bg-gray-200 w-64">
                                    Recueil Musical
                            </button>
                        </Link>



                        <br/>
                        <Link href="/">
                            <button
                                className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-gray-200 w-40">
                                    Retour
                            </button>
                        </Link>

                    </>
            }
        </div>
    </div>
  );
}
