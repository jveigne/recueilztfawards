'use client';

import Link from "next/link";
import { use } from "react";
import { useBooleanContext } from "../../../../context/LanguageContext";


const speakers = [
    {
        id: 1,
        name: "Dieudonné NDJAMEN",
        title: "Consultant en Stratégie",
        email: "jean.dupont@example.com",
        phone: "+33 6 12 34 56 78",
        bio: "Consultant en stratégie avec plus de 15 ans d'expérience dans les secteurs de la finance et de l'industrie.",
        skills: ["Stratégie d'entreprise", "Analyse financière", "Gestion de projet"],
        experience: [
            {
                "poste": "Consultant Senior",
                "entreprise": "ABC Consulting",
                "periode": "2018 - Présent",
                "description": "Accompagnement des entreprises dans la définition et la mise en œuvre de leur stratégie."
            },
            {
                "poste": "Analyste Stratégique",
                "entreprise": "Banque Nationale",
                "periode": "2013 - 2018",
                "description": "Analyse des opportunités de croissance et élaboration des plans stratégiques."
            }
        ],
        education: [
            {
                "diplome": "Master en Stratégie d'Entreprise",
                "etablissement": "HEC Paris",
                "annee": "2012"
            }
        ]
    },
    {
        id: 2,
        name: "Georges TIMBA",
        title: "Coach en Leadership",
        email: "marie.leroy@example.com",
        phone: "+33 7 89 12 34 56",
        bio: "Coach certifiée spécialisée en leadership et développement personnel.",
        skills: ["Leadership", "Coaching", "Gestion du changement"],
        experience: [
            {
                "poste": "Coach en Leadership",
                "entreprise": "Indépendante",
                "periode": "2016 - Présent",
                "description": "Accompagnement des cadres et dirigeants dans le développement de leur leadership."
            }
        ],
        education: [
            {
                "diplome": "Certification en Coaching Professionnel",
                "etablissement": "ICF",
                "annee": "2015"
            }
        ]
    },
    {
        id: 3,
        name: "Jean Claude AWALA",
        title: "Expert en Cybersécurité",
        email: "pierre.morel@example.com",
        phone: "+33 6 98 76 54 32",
        bio: "Expert en cybersécurité avec une expérience approfondie en audit et en gestion des risques.",
        skills: ["Cybersécurité", "Audit", "Gestion des risques"],
        experience: [
            {
                "poste": "Responsable Cybersécurité",
                "entreprise": "TechSecure",
                "periode": "2020 - Présent",
                "description": "Gestion des risques de sécurité et mise en œuvre des politiques de cybersécurité."
            },
            {
                "poste": "Auditeur en Cybersécurité",
                "entreprise": "CyberAudit",
                "periode": "2015 - 2020",
                "description": "Audit des systèmes d'information et identification des vulnérabilités."
            }
        ],
        education: [
            {
                "diplome": "Master en Sécurité Informatique",
                "etablissement": "Université de Technologie de Compiègne",
                "annee": "2014"
            }
        ]
    },
    {
        id: 4,
        name: "Joseph NGANDEU",
        title: "Experte en Marketing Digital",
        email: "sophie.durand@example.com",
        phone: "+33 6 45 23 67 89",
        bio: "Spécialiste en marketing digital et stratégie de contenu.",
        skills: ["Marketing digital", "SEO", "Content Marketing"],
        experience: [
            {
                "poste": "Responsable Marketing Digital",
                "entreprise": "E-commerce Plus",
                "periode": "2019 - Présent",
                "description": "Conception et exécution de stratégies de marketing digital pour les e-commerçants."
            }
        ],
        education: [
            {
                "diplome": "Master en Marketing Digital",
                "etablissement": "Université de Paris",
                "annee": "2018"
            }
        ]
    },
    {
        id: 5,
        name: "Patrice NYAMY",
        title: "Spécialiste en Intelligence Artificielle",
        email: "thomas.bernard@example.com",
        phone: "+33 6 78 34 12 45",
        bio: "Expert en intelligence artificielle et apprentissage automatique.",
        skills: ["Intelligence Artificielle", "Machine Learning", "Data Science"],
        experience: [
            {
                "poste": "Data Scientist",
                "entreprise": "AI Tech",
                "periode": "2021 - Présent",
                "description": "Développement de modèles d'IA pour les projets de recherche appliquée."
            }
        ],
        education: [
            {
                "diplome": "Doctorat en Intelligence Artificielle",
                "etablissement": "INRIA",
                "annee": "2020"
            }
        ]
    },
    {
        id: 6,
        name: "Steve NJOUONKEP",
        title: "Consultante en Ressources Humaines",
        email: "laura.martin@example.com",
        phone: "+33 6 87 54 32 10",
        bio: "Spécialiste en gestion des talents et en développement organisationnel.",
        skills: ["Gestion des talents", "Recrutement", "Formation"],
        experience: [
            {
                "poste": "Consultante RH",
                "entreprise": "HR Consulting",
                "periode": "2017 - Présent",
                "description": "Support aux entreprises dans la gestion des ressources humaines et des talents."
            }
        ],
        education: [
            {
                "diplome": "Master en Gestion des Ressources Humaines",
                "etablissement": "Université de Lyon",
                "annee": "2016"
            }
        ]
    },
    {
        id: 7,
        name: "Anne Josiane KOUAM",
        title: "Expert en Transformation Digitale",
        email: "antoine.lefevre@example.com",
        phone: "+33 6 56 78 34 12",
        bio: "Accompagnement des entreprises dans leur transformation numérique.",
        skills: ["Transformation Digitale", "Conduite du changement", "Gestion de projet"],
        experience: [
            {
                "poste": "Responsable Transformation Digitale",
                "entreprise": "DigitalWay",
                "periode": "2019 - Présent",
                "description": "Pilotage des initiatives de transformation numérique des entreprises."
            }
        ],
        education: [
            {
                "diplome": "MBA Transformation Digitale",
                "etablissement": "ESSEC Business School",
                "annee": "2018"
            }
        ]
    },
    {
        id: 8,
        name: "Anicet FANGWA",
        title: "Experte en Gestion de Projet Agile",
        email: "isabelle.fournier@example.com",
        phone: "+33 6 54 76 98 32",
        bio: "Spécialiste en gestion de projet agile et méthodologie Scrum.",
        skills: ["Scrum", "Agilité", "Gestion de projet"],
        experience: [
            {
                "poste": "Scrum Master",
                "entreprise": "AgileCorp",
                "periode": "2020 - Présent",
                "description": "Animation des cérémonies agiles et accompagnement des équipes de développement."
            }
        ],
        education: [
            {
                "diplome": "Certification Scrum Master",
                "etablissement": "Scrum Alliance",
                "annee": "2019"
            }
        ]
    },
    {
        id: 9,
        name: "Gilles TAGNE",
        title: "Expert en Finance d'Entreprise",
        email: "julien.petit@example.com",
        phone: "+33 6 12 78 45 90",
        bio: "Spécialiste en finance d'entreprise et analyse des investissements.",
        skills: ["Finance", "Analyse des investissements", "Contrôle de gestion"],
        experience: [
            {
                "poste": "Directeur Financier",
                "entreprise": "FinancePlus",
                "periode": "2018 - Présent",
                "description": "Gestion financière des entreprises clientes et contrôle de gestion."
            }
        ],
        education: [
            {
                "diplome": "Master en Finance",
                "etablissement": "Université Paris-Dauphine",
                "annee": "2017"
            }
        ]
    }
]


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

            <div className="bg-navy-900 text-gold-300 min-h-screen p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-gold-500">{speaker.name}</h1>
                    <h2 className="text-2xl mb-6">{speaker.title}</h2>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-gold-400">Coordonnées</h3>
                        <p>{speaker.email}</p>
                        <p>{speaker.phone}</p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-gold-400">Biographie</h3>
                        <p>{speaker.bio}</p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-gold-400">Compétences</h3>
                        <ul className="list-disc list-inside">
                            {speaker.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-gold-400">Expériences professionnelles</h3>
                        {speaker.experience.map((experience, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="font-semibold">{experience.poste}</h4>
                                <p>{experience.entreprise} | {experience.periode}</p>
                                <p>{experience.description}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2 text-gold-400">Formation</h3>
                        {speaker.education.map((education, index) => (
                            <div key={index} className="mb-2">
                                <h4 className="font-semibold">{education.diplome}</h4>
                                <p>{education.etablissement} | {education.annee}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>

    );
}
