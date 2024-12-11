'use client';

import Link from 'next/link';
import {useBooleanContext} from '../../../context/LanguageContext';

const intervenants = [
    {
        id: '1',
        name: 'Jean Claude AWALA',
        title: 'Magistrat Hors Echelle - Conseiller Technique à la Présidence de la République du Cameroun',
        image: '/images/claude.jpg',
    },
    {
        id: '2',
        name: 'Georges TIMBA',
        title: 'Magistrat - Président du Tribunal de Première Instance de Yaoundé Cameroun',
        image: '/images/georges.jpg',
    },
    {
        id: '3',
        name: 'Prof Dieudonné NDJAMEN',
        title: 'Professeur Titulaire des Universités - Université de Yaoundé 1 - Recteur Université ZTF Cameroun',
        image: '/images/dieudonne.jpg',
    },
    {
        id: '4',
        name: 'Joseph NGANDEU',
        title: 'Consultant international - Cameroun',
        image: '/images/joseph.jpg',
    },
    {
        id: '5',
        name: 'Patrice NYAMY',
        title: 'Ingénieur Informatique - PDG de plusieurs entreprises - France',
        image: '/images/patrice.jpg',
    },
    {
        id: '6',
        name: 'Steve NJOUONKEP',
        title: 'Doctorant - Université de Clermont Auvergne/ Université de Montréal - France',
        image: '/images/steve.jpg',
    },
    {
        id: '7',
        name: 'Anne Josiane KOUAM',
        title: 'Docteur Ingénieur - Chercheur à TU Berlin - Allemagne',
        image: '/images/josiane.jpg',
    },
    {
        id: '8',
        name: 'Anicet FANGWA',
        title: 'Docteur - Professeur assistant - Université de McGill - Canada',
        image: '/images/anicet.jpg',
    },
    {
        id: '9',
        name: 'Gilles TAGNE',
        title: 'Professeur associé en Robotique - JUNIA - Université de Lille France',
        image: '/images/gilles.jpg',
    },
    {
        id: '10',
        name: 'Moïse ADAMOU',
        title: 'Professeur - Université de Ngaoundéré - Vice Doyen chargé de la recherche et de la coopération université de Garoua Cameroun',
        image: '/images/adamou.jpg',
    },

];
const speakers = [
    {
        id: "1",
        name: "Jean Claude AWALA",
        title: "Off-scale magistrate - Technical Advisor at the Presidency of the Republic of Cameroon",
        image: "/images/claude.jpg"
    },
    {
        id: "2",
        name: "Georges TIMBA",
        title: "Magistrate - President of the Court of First Instance of Yaoundé Cameroon",
        image: "/images/georges.jpg"
    },
    {
        id: '3',
        name: 'Dieudonné NDJAMEN',
        title: 'Professor - Yaoundé 1 University - Rector ZTF University Cameroon',
        image: '/images/dieudonne.jpg',
    },
    {
        id: "4",
        name: "Joseph NGANDEU",
        title: "International Consultant - Cameroon",
        image: "/images/joseph.jpg"
    },
    {
        id: '5',
        name: 'Patrice NYAMY',
        title: 'Software Engineer - CEO - France',
        image: '/images/patrice.jpg',
    },
    {
        id: '6',
        name: 'Steve NJOUONKEP',
        title: 'Mph,Phd student - Clermont Auvergne University/ Montréal University - France',
        image: '/images/steve.jpg',
    },
    {
        id: '7',
        name: 'Anne Josiane KOUAM',
        title: 'Engineer Doctor - Researcher at TU Berlin - Germany',
        image: '/images/josiane.jpg',
    },
    {
        id: '8',
        name: 'Anicet FANGWA',
        title: 'PhD Assistant Professor - McGill University Desautels Faculty of Management - Canada',
        image: '/images/anicet.jpg',
    },
    {
        id: '9',
        name: 'Gilles TAGNE',
        title: 'Associate Professor in Robotics - JUNIA - University of Lille, France',
        image: '/images/gilles.jpg',
    },
    {
        id: '10',
        name: 'Moïse ADAMOU',
        title: 'Professor - University of Ngaoundéré - Vice-Dean in charge of research and cooperation at the University of Garoua, Cameroon',
        image: '/images/adamou.jpg',
    }

];

export default function SpeakersPage() {

    const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
    // Choix des données en fonction de la langue fr/en
    const events = boolState ? speakers : intervenants;

    return (<div style={{fontFamily: "'Cinzel', serif"}}> {/* Application de la police ici */}
            {/* Header */}
            <header
                style={{
                    backgroundColor: '#131857', // Couleur personnalisée pour le fond du header
                }}
                className="relative text-white p-6 shadow w-full overflow-hidden"
            >
                {/* Etoiles animées */}
                <div className="absolute inset-0 overflow-hidden z-0">
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

                {/* Contenu principal */}
                <div className="relative z-10 text-center">
                    {boolState ? (
                        <>
                            <h1>
                                <span className="text-5xl text-white font-lavishly font-bold">Speakers</span>
                            </h1>
                            <div
                                className="flex flex-col sm:flex-row sm:justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
                                {/* Bouton accueil */}
                                <Link href="/welcome">
                                    <button
                                        className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                        Home
                                    </button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>
                                <span className="text-5xl text-white font-lavishly font-bold">Intervenants</span>
                            </h1>
                            <div
                                className="flex flex-col sm:flex-row sm:justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
                                {/* Bouton accueil */}
                                <Link href="/welcome">
                                    <button
                                        className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                        Accueil
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                {/* Styles pour l'animation des étoiles */}
                <style jsx>{`
                    @keyframes twinkle {
                        0%, 100% {
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 1;
                        }
                    }
                `}</style>
            </header>

            <div className="min-h-screen bg-white text-black">
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="border border-yellow-300 rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={event.image}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-yellow-300"/>
                                <h2 className="text-2xl font-bold text-center text-yellow-700">
                                    {event.name}
                                </h2>
                                <p className="text-center text-gray-600 italic">{event.title}</p>
                                <div className="text-center mt-6">
                                    <Link href={`/speakers/${event.id}`}>
                                        <button
                                            className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
                                            Voir le profil
                                        </button>
                                    </Link>
                                </div>*
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );


}
