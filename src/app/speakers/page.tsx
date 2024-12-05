'use client';

import Link from 'next/link';
import {useBooleanContext} from '../../../context/LanguageContext';

const intervenants = [
    {
        id: '1',
        name: 'Steve Njouonkep',
        title: 'Doctorant - Université de Clermont Auvergne/ Université de Montréal',
        description: 'Santé globale, innovation scientifique, recherche transdisciplinaire, pandémie',
        image: '/images/logorouge.png',
    },
    {
        id: '2',
        name: 'Josiane Tamo',
        title: 'Docteur',
        description: 'Post Doctorat',
        image: '/images/logorouge.png',
    },
    {
        id: '3',
        name: 'Anicet Fangwa',
        title: 'Docteur - Professeur assistant - Université de McGill - Canada',
        description: 'Peut on être croyant et scientifique ?',
        image: '/images/logorouge.png',
    },
    {
        id: '4',
        name: 'Dieudonnée Ndjamen',
        title: 'Professeur Titulaire des Universités - Université de Yaoundé 1 - Recteur Université ZTF',
        description: 'Une réflexion sur l éducation',
        image: '/images/logorouge.png',
    },
    {
        id: '5',
        name: 'Patrice Nyamy',
        title: 'Ingénieur Informatique - PDG de plusieurs entreprises',
        description: 'Dieu, la Bible, la Science',
        image: '/images/logorouge.png',
    }
];
const speakers = [
    {
        id: '1',
        name: 'Steve Njouonkep',
        title: 'Mph,Phd student - Clermont Auvergne University/ Montréal University',
        description: 'From crisis to innovation: Science role in pandemic solution',
        image: '/images/logorouge.png',
    },
    {
        id: '2',
        name: 'Josiane Tamo',
        title: 'PhD',
        description: 'On going post doc',
        image: '/images/logorouge.png',
    },
    {
        id: '3',
        name: 'Anicet Fangwa',
        title: 'PhD Assistant Professor - McGill University Desautels Faculty of Management - Canada',
        description: 'Can we be a believer and a scientist ?',
        image: '/images/logorouge.png',
    },
    {
        id: '4',
        name: 'Dieudonnée Ndjamen',
        title: 'Professor - Université de Yaoundé 1 University - Rector ZTF University',
        description: 'A reflexion on education',
        image: '/images/logorouge.png',
    },
    {
        id: '5',
        name: 'Patrice Nyamy',
        title: 'Software Engineer - CEO',
        description: 'God, The Bible, Science',
        image: '/images/logorouge.png',
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
                                <p className="mt-4 text-gray-700">{event.description}</p>
                                {/*<div className="text-center mt-6">
                                    <Link href={`/speakers/${event.id}`}>
                                        <button
                                            className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
                                            Voir le profil
                                        </button>
                                    </Link>
                                </div>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );


}
