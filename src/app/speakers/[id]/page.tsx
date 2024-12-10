'use client';

import Link from "next/link";
import { use } from "react";
import { useBooleanContext } from "../../../../context/LanguageContext";


const speakers = [
    {
        id: 1,
        name: "Dieudonné Njamén",
        title: "Full Professor",
        email: "dieudonne.njamen@gmail.com",
        phone: "+33 6 12 34 56 78",
        bio: "Full Professor in animal biology and physiology with extensive experience in molecular physiology and pharmacology research.",
        skills: ["Physiology", "Pharmacology", "Research Supervision", "Academic Leadership"],
        experience: [
            {
                poste: "Full Professor",
                entreprise: "University of Yaoundé I, Faculty of Science",
                periode: "2015 - Present",
                description: "Teaching, research, and academic leadership in animal biology and physiology."
            },
            {
                poste: "Associate Professor",
                entreprise: "University of Yaoundé I, Faculty of Science",
                periode: "2008 - 2015",
                description: "Contributed to academic and research advancements in physiology and pharmacology."
            },
            {
                poste: "Senior Lecturer",
                entreprise: "University of Yaoundé I, Faculty of Science",
                periode: "2003 - 2008",
                description: "Lecturing and guiding students in physiology and pharmacology."
            },
            {
                poste: "Research Associate",
                entreprise: "Endocrine and Diabetes Unit, Faculty of Medicine and Biomedical Sciences",
                periode: "1998 - Present",
                description: "Conducting research in molecular physiology and diabetes."
            }
        ],
        education: [
            {
                diplome: "Doctorat d’Etat in Physiology and Pharmacology",
                etablissement: "University of Yaoundé I",
                annee: "2004"
            },
            {
                diplome: "Doctorate Degree in Molecular Physiology and Pharmacology",
                etablissement: "University of Yaoundé I",
                annee: "1998"
            },
            {
                diplome: "DEA in Animal Biology and Physiology",
                etablissement: "University of Yaoundé I",
                annee: "1994"
            },
            {
                diplome: "Maîtrise in Animal Biology and Physiology",
                etablissement: "University of Yaoundé I",
                annee: "1992"
            },
            {
                diplome: "Licence in Life Sciences (Zoology)",
                etablissement: "University of Yaoundé I",
                annee: "1991"
            }
        ]
    },
    {
        id: 2,
        name: "Georges TIMBA",
        title: "Leadership Coach",
        email: "marie.leroy@gmail.com",
        phone: "+33 7 89 12 34 56",
        bio: "Certified coach specializing in leadership and personal development.",
        skills: ["Leadership", "Coaching", "Change Management"],
        experience: [
            {
                poste: "Leadership Coach",
                entreprise: "Independent",
                periode: "2016 - Present",
                description: "Supporting executives and leaders in developing their leadership skills."
            }
        ],
        education: [
            {
                diplome: "Professional Coaching Certification",
                etablissement: "ICF",
                annee: "2015"
            }
        ]
    },
    {
        id: 3,
        name: "Jean Claude AWALA",
        title: "Cybersecurity Expert",
        email: "pierre.morel@gmail.com",
        phone: "+33 6 98 76 54 32",
        bio: "Cybersecurity expert with deep experience in audits and risk management.",
        skills: ["Cybersecurity", "Auditing", "Risk Management"],
        experience: [
            {
                poste: "Cybersecurity Manager",
                entreprise: "TechSecure",
                periode: "2020 - Present",
                description: "Managing security risks and implementing cybersecurity policies."
            },
            {
                poste: "Cybersecurity Auditor",
                entreprise: "CyberAudit",
                periode: "2015 - 2020",
                description: "Auditing information systems and identifying vulnerabilities."
            }
        ],
        education: [
            {
                diplome: "Master's in Computer Security",
                etablissement: "University of Technology of Compiègne",
                annee: "2014"
            }
        ]
    },
    {
        id: 4,
        name: "Joseph NGANDEU",
        title: "CEO, International Consultant, and Environmental Urban Planner",
        email: "joseph.ngandeu@gmail.com",
        phone: "+33 6 45 23 67 89",
        bio: "CEO of Consortium Global IT Smart Solutions, international consultant in leadership, and expert in economic and environmental geography, with rich experience in international project coordination and environmental protection.",
        skills: ["Leadership", "Urban Planning", "Economic Geography", "Environmental Protection", "International Consulting"],
        experience: [
            {
                poste: "CEO",
                entreprise: "Consortium Global IT Smart Solutions",
                periode: "Since 2012",
                description: "Strategic and operational leadership of the consortium with a focus on IT solutions and international project management."
            },
            {
                poste: "International Consultant",
                entreprise: "Barri and Partners",
                periode: "Since 2012",
                description: "Providing strategic guidance for international projects in sustainable development and youth leadership."
            },
            {
                poste: "Founder President",
                entreprise: "CARRE.GEO",
                periode: "2004 - 2010",
                description: "Advocated for environmental protection in collaboration with the French Cultural Center and other international organizations."
            },
            {
                poste: "Lecturer",
                entreprise: "ICT University",
                periode: "2016 - 2018",
                description: "Teaching and training in economic geography and environmental management."
            }
        ],
        education: [
            {
                diplome: "Doctoral Candidate in Economic Geography and Development",
                etablissement: "University of Yaoundé I",
                annee: "Ongoing"
            }
        ]
    },
    {
        id: 5,
        name: "Patrice NYAMY",
        title: "Artificial Intelligence Specialist",
        email: "thomas.bernard@gmail.com",
        phone: "+33 6 78 34 12 45",
        bio: "Expert in artificial intelligence and machine learning.",
        skills: ["Artificial Intelligence", "Machine Learning", "Data Science"],
        experience: [
            {
                poste: "Data Scientist",
                entreprise: "AI Tech",
                periode: "2021 - Present",
                description: "Developing AI models for applied research projects."
            }
        ],
        education: [
            {
                diplome: "PhD in Artificial Intelligence",
                etablissement: "INRIA",
                annee: "2020"
            }
        ]
    },
    {
        id: 6,
        name: "Steve NJOUONKEP",
        title: "Epidemiologist, Doctoral Researcher in Molecular Epidemiology",
        email: "steve.njouonkep@gmail.com",
        phone: "+33 6 87 54 32 10",
        bio: "Doctoral researcher in molecular epidemiology, studying modifiable risk factors for cardiometabolic and chronic non-communicable diseases. Combines integrative approaches to discover blood biomarkers predictive of silent metabolic disorders.",
        skills: ["Molecular Epidemiology", "Biostatistics", "Nutrition", "Clinical Research"],
        experience: [
            {
                poste: "Doctoral Researcher",
                entreprise: "INRAE / Montreal Geriatric University Institute",
                periode: "2023 - Present",
                description: "Researching comorbidities of metabolic syndrome and frailty syndrome using clinical, metabolomic, and nutritional data."
            },
            {
                poste: "Research Collaborator",
                entreprise: "University Sorbonne Paris North",
                periode: "2021 - 2023",
                description: "Contributing to studies on the relationship between diet and chronic diseases in the NutriNet-Santé cohort."
            }
        ],
        education: [
            {
                diplome: "PhD Candidate in Molecular Epidemiology",
                etablissement: "University of Clermont-Ferrand / University of Montreal",
                annee: "2023 - Present"
            },
            {
                diplome: "Master's in Biostatistics",
                etablissement: "University Paris-Saclay",
                annee: "2023"
            },
            {
                diplome: "Master's in Nutritional Epidemiology",
                etablissement: "University Sorbonne Paris North",
                annee: "2021"
            }
        ],
        publications: [
            {
                title: "Prevalence and Determinants of Metabolic Syndrome and Pre-Frailty Comorbidity",
                authors: "Njouonkep S et al",
                annee: 2024,
                source: "Whitehall II Study"
            },
            {
                title: "N-Glycolylneuraminic Acid (Neu5Gc) and Cardiovascular Disease Risk",
                authors: "Njouonkep S et al",
                annee: 2023,
                source: "NutriNet-Santé Cohort"
            }
        ]
    },
    {
        id: 7,
        name: "Clément FOGUE",
        title: "Consultant, Data Science, and Machine Learning Expert",
        email: "clement.fogue@gmail.com",
        phone: "+33 7 89 65 43 21",
        bio: "Consultant in Data Science and Machine Learning, with expertise in AI, Big Data, and blockchain.",
        skills: ["Data Science", "Machine Learning", "Blockchain", "Big Data"],
        experience: [
            {
                poste: "Data Science Consultant",
                entreprise: "Data Consultancy",
                periode: "2019 - Present",
                description: "Advising businesses on using data technologies to enhance performance."
            }
        ],
        education: [
            {
                diplome: "Master's in Data Science",
                etablissement: "University Pierre and Marie Curie",
                annee: "2018"
            }
        ]
    }
];



const intervenants = [
    {
        id: 1,
        name: "Dieudonné Njamén",
        title: "Professeur titulaire",
        email: "dieudonne.njamen@gmail.com",
        phone: "+33 6 12 34 56 78",
        bio: "Professeur titulaire en biologie et physiologie animales avec une grande expérience de la recherche en physiologie moléculaire et en pharmacologie.",
        skills: ["Physiologie", "Pharmacologie", "Supervision de la recherche", "Leadership académique"],
        experience: [
            {
                poste: "Professeur titulaire",
                entreprise: "Université de Yaoundé I, Faculté des Sciences",
                periode: "2015 - Present",
                description: "Enseignement, recherche et direction académique en biologie et physiologie animales."
            },
            {
                poste: "Professeur associé",
                entreprise: "Université de Yaoundé I, Faculté des Sciences",
                periode: "2008 - 2015",
                description: "Contributions académiques et recherche en physiologie et pharmacologie."
            },
            {
                poste: "Maître de conférences",
                entreprise: "Université de Yaoundé I, Faculté des Sciences",
                periode: "2003 - 2008",
                description: "Enseignement et encadrement d'étudiants en physiologie et pharmacologie."
            },
            {
                poste: "Chercheur associé",
                entreprise: "Endocrine and Diabetes Unit, Faculty of Medicine and Biomedical Sciences",
                periode: "1998 - Present",
                description: "Recherche en physiologie moléculaire et diabète."
            }
        ],
        education: [
            {
                diplome: "Doctorat d’État en Physiologie et Pharmacologie",
                etablissement: "Université de Yaoundé I",
                annee: "2004"
            },
            {
                diplome: "Doctorat en Physiologie Moléculaire et Pharmacologie",
                etablissement: "Université de Yaoundé I",
                annee: "1998"
            },
            {
                diplome: "DEA en Biologie et Physiologie Animales",
                etablissement: "Université de Yaoundé I",
                annee: "1994"
            },
            {
                diplome: "Maîtrise en Biologie et Physiologie Animales",
                etablissement: "Université de Yaoundé I",
                annee: "1992"
            },
            {
                diplome: "Licence en Sciences de la Vie (Zoologie)",
                etablissement: "Université de Yaoundé I",
                annee: "1991"
            }
        ]
    },
    {
        id: 2,
        name: "Georges TIMBA",
        title: "Coach en Leadership",
        email: "marie.leroy@gmail.com",
        phone: "+33 7 89 12 34 56",
        bio: "Coach certifié spécialisé en leadership et développement personnel.",
        skills: ["Leadership", "Coaching", "Gestion du changement"],
        experience: [
            {
                poste: "Coach en Leadership",
                entreprise: "Indépendant",
                periode: "2016 - Présent",
                description: "Accompagnement des cadres et dirigeants dans le développement de leur leadership."
            }
        ],
        education: [
            {
                diplome: "Certification en Coaching Professionnel",
                etablissement: "ICF",
                annee: "2015"
            }
        ]
    },
    {
        id: 3,
        name: "Jean Claude AWALA",
        title: "Expert en Cybersécurité",
        email: "pierre.morel@gmail.com",
        phone: "+33 6 98 76 54 32",
        bio: "Expert en cybersécurité avec une expérience approfondie en audit et en gestion des risques.",
        skills: ["Cybersécurité", "Audit", "Gestion des risques"],
        experience: [
            {
                poste: "Responsable Cybersécurité",
                entreprise: "TechSecure",
                periode: "2020 - Présent",
                description: "Gestion des risques de sécurité et mise en œuvre des politiques de cybersécurité."
            },
            {
                poste: "Auditeur en Cybersécurité",
                entreprise: "CyberAudit",
                periode: "2015 - 2020",
                description: "Audit des systèmes d'information et identification des vulnérabilités."
            }
        ],
        education: [
            {
                diplome: "Master en Sécurité Informatique",
                etablissement: "Université de Technologie de Compiègne",
                annee: "2014"
            }
        ]
    },
    {
        id: 4,
        name: "Joseph NGANDEU",
        title: "PDG, Consultant International et Urbaniste-Environnementaliste",
        email: "joseph.ngandeu@gmail.com",
        telephone: "+33 6 45 23 67 89",
        bio: "PDG du Consortium Global IT Smart Solutions, consultant international en leadership et expert en géographie économique et environnementale, avec une riche expérience dans la coordination de projets internationaux et la protection de l'environnement.",
        skills: ["Leadership", "Urbanisme", "Géographie économique", "Protection de l'environnement", "Consultation internationale"],
        experience: [
            {
                poste: "PDG",
                entreprise: "Consortium Global IT Smart Solutions",
                periode: "Depuis 2012",
                description: "Direction stratégique et opérationnelle du consortium, avec un focus sur les solutions informatiques et la gestion de projets internationaux."
            },
            {
                poste: "Consultant International",
                entreprise: "Barri and Partners",
                periode: "Depuis 2012",
                description: "Accompagnement et conseils stratégiques pour des projets internationaux touchant au développement durable et au leadership des jeunes."
            },
            {
                poste: "Président Fondateur",
                entreprise: "CARRE.GEO",
                periode: "2004 - 2010",
                description: "Militant pour la protection de l’environnement en partenariat avec le Centre Culturel Français et d’autres organisations internationales."
            },
            {
                poste: "Enseignant",
                entreprise: "ICT University",
                periode: "2016 - 2018",
                description: "Enseignement et formation en géographie économique et gestion environnementale."
            }
        ],
        education: [
            {
                diplome: "Doctorant en Géographie Économique et du Développement",
                etablissement: "Université de Yaoundé I",
                annee: "En cours"
            }
        ]
    },
    {
        id: 5,
        name: "Patrice NYAMY",
        title: "Spécialiste de l'intelligence artificielle",
        email: "thomas.bernard@gmail.com",
        phone: "+33 6 78 34 12 45",
        bio: "Expert en intelligence artificielle et en apprentissage automatique.",
        skills: ["Intelligence artificielle", "Apprentissage automatique", "Science des données"],
        experience: [
            {
                poste: "Science des données",
                entreprise: "Technologie de l'IA",
                periode: "2021 - aujourd'hui",
                description: "Développement de modèles d'IA pour des projets de recherche appliquée."
            }
        ],
        education: [
            {
                diplome: "Doctorat en intelligence artificielle",
                etablissement: "INRIA",
                annee: "2020"
            }
        ]
    },
    {
        id: 6,
        name: "Steve NJOUONKEP",
        title: "Épidémiologiste, chercheur doctorant en épidémiologie moléculaire",
        email: "steve.njouonkep@gmail.com",
        phone: "+33 6 87 54 32 10",
        bio: "Chercheur doctorant en épidémiologie moléculaire, étudiant les facteurs de risque modifiables pour les maladies cardiométaboliques et les maladies chroniques non transmissibles. Il combine des approches intégratives pour découvrir des biomarqueurs sanguins prédictifs de troubles métaboliques silencieux.",
        skills: ["Molecular Epidemiology", "Biostatistics", "Nutrition", "Clinical Research"],
        experience: [
            {
                poste: "Doctoral Researcher",
                entreprise: "INRAE / Montreal Geriatric University Institute",
                periode: "2023 - Aujourd'hui",
                description: "Recherche des comorbidités du syndrome métabolique et du syndrome de fragilité à l'aide de données cliniques, métabolomiques et nutritionnelles."
            },
            {
                poste: "Collaborateur de recherche",
                entreprise: "Université Sorbonne Paris Nord ",
                periode: "2021 - 2023",
                description: "Contribuer aux études sur la relation entre l'alimentation et les maladies chroniques dans la cohorte NutriNet-Santé."
            }
        ],
        education: [
            {
                diplome: "Doctorant en épidémiologie moléculaire",
                etablissement: "Université de Clermont-Ferrand / Université de Montréal ",
                annee: "2023 - Aujourd'hui"
            },
            {
                diplome: "Master en biostatistique",
                etablissement: "Université de Paris-Saclay",
                annee: "2023"
            },
            {
                diplome: "Master en épidémiologie nutritionnelle",
                etablissement: "Université Sorbonne Paris Nord ",
                annee: "2021"
            }
        ],
        publications: [
            {
                title: "Prévalence et déterminants du syndrome métabolique et de la comorbidité pré-fragilité",
                authors: "Njouonkep S et al",
                annee: 2024,
                source: "Étude Whitehall II"
            },
            {
                title: "Acide N-Glycolylneuraminique (Neu5Gc) et risque de maladie cardiovasculaire",
                authors: "Njouonkep S et al",
                annee: 2023,
                source: "NutriNet-Santé Cohort"
            }
        ]
    },
    {
        id: 7,
        name: "Clément FOGUE",
        title: "Consultant, expert en science des données et en apprentissage automatique",
        email: "clement.fogue@gmail.com",
        phone: "+33 7 89 65 43 21",
        bio: "Consultant en science des données et apprentissage automatique, avec une expertise en IA, Big Data et blockchain..",
        skills: ["Science des données", "Apprentissage automatique", "Blockchain", "Big Data"],
        experience: [
            {
                poste: "Consultant en science des données",
                entreprise: "Conseil en données",
                periode: "2019 - aujourd'hui",
                description: "Conseiller les entreprises sur l'utilisation des technologies de l'information pour améliorer leurs performances."
            }
        ],
        education: [
            {
                diplome: "Master en science des données",
                etablissement: "Université Pierre et Marie Curie",
                annee: "2018"
            }
        ]
    }
];



// Définir `params` comme une promesse
type Params = Promise<{ id: string }>;

export default function SpeakerProfilePage({params}: { params: Params }) {

    const resolvedParams = use(params);
    const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
    const id = parseInt(resolvedParams.id, 10);
    const list = boolState ? speakers: intervenants;
    const speaker = list.find((speaker) => speaker.id === id);
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
