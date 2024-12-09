'use client';

import Link from "next/link";
import { use } from "react";
import { useBooleanContext } from "../../../../context/LanguageContext";

const speakers = [
    { id: 1, name: 'John Doe', title: 'Développeur Frontend', bio: 'Spécialiste en React et Next.js.', image: '/images/john.jpg', skills: ['React', 'Next.js', 'JavaScript'] },
    { id: 2, name: 'Jane Smith', title: 'Spécialiste IA', bio: 'Experte en intelligence artificielle.', image: '/images/jane.jpg', skills: ['Python', 'Machine Learning', 'IA'] },
    { id: 3, name: 'Paul Dupont', title: 'Designer UX/UI', bio: 'Designer d’expériences utilisateur.', image: '/images/paul.jpg', skills: ['Figma', 'UX/UI Design', 'Prototypage'] },
];

// Définir `params` comme une promesse
type Params = Promise<{ id: string }>;

export default function SpeakerProfilePage({params}: { params: Params }) {

    const resolvedParams = use(params);
    const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
    const id = parseInt(resolvedParams.id, 10);
    const speaker = speakers.find((speaker) => speaker.id === id);

    if (!speaker) {
        return (
            <>
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
                                    <Link href="/speakers">
                                        <button
                                            className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                            Speakers list
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
                                    <Link href="/speakers">
                                        <button
                                            className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                            Liste des intervenants
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

                <p>Speaker introuvable</p>;
            </>
        )
    }

    return (
        <>
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
                                <Link href="/speakers">
                                    <button
                                        className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                        Speakers list
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
                                <Link href="/speakers">
                                    <button
                                        className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
                                        Liste des intervenants
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

            <section>
                <img src={speaker.image} alt={speaker.name}/>
                <h1>{speaker.name}</h1>
                <h2>{speaker.title}</h2>
                <p>{speaker.bio}</p>
                <h3>Compétences</h3>
                <ul>
                    {speaker.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </>

    );
}
