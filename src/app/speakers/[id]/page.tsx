'use client';

import Link from "next/link";
import { use } from "react";
import { useBooleanContext } from "../../../../context/LanguageContext";

const speakers = [
    {
        id: 1,
        name: "Jean Claude AWALA",
        title: "Off-scale magistrate - Technical Advisor at the Presidency of the Republic of Cameroon",
        email: "",
        phone: "",
        bio: "First Advocate General at the General Prosecutor's Office near the Supreme Court, Mr. AWALA Wodougue Jean Claude is a magistrate of exceptional professional career and outside the traditional hierarchy.",
        skills: [],
        experience: [
        ],
        education: [
        ]
    },
    {
        id: 2,
        name: "Georges TIMBA",
        title: "Magistrate - President of the Court of First Instance of Yaoundé Cameroon",
        email: "",
        phone: "",
        bio: "",
        skills: [],
        experience: [
        ],
        education: [
        ]
    },
    {
        id: 3,
        name: "Pr Dieudonné Njamen",
        title: "Full Professor",
        email: "",
        phone: "",
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
        id: 4,
        name: "Joseph NGANDEU",
        title: "CEO, International Consultant, Urban Planner and Environmental Expert",
        email: "",
        phone: "",
        bio: "CEO of the Global IT Smart Solutions Consortium, international leadership consultant, and expert in economic and environmental geography, with extensive experience in managing international projects and environmental protection.",
        skills: ["Leadership", "Urban Planning", "Economic Geography", "Environmental Protection", "International Consultancy"],
        experience: [
            {
                poste: "CEO",
                entreprise: "Global IT Smart Solutions Consortium",
                periode: "Since 2012",
                description: "Strategic and operational leadership of the consortium, focusing on IT solutions and managing international projects."
            },
            {
                poste: "International Consultant",
                entreprise: "Barri and Partners",
                periode: "Since 2012",
                description: "Providing strategic advice for international projects focusing on sustainable development and youth leadership."
            },
            {
                poste: "Founder President",
                entreprise: "CARRE.GEO",
                periode: "2004 - 2010",
                description: "Advocacy for environmental protection in partnership with the French Cultural Center and other international organizations."
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
                diplome: "PhD Candidate in Economic Geography and Development",
                etablissement: "University of Yaoundé I",
                annee: "Ongoing"
            }
        ],
        additional_info: {
            panelist_years: ["2022", "2023"],
            biography_details: [
                "CEO of Global IT Smart Solutions Consortium; International Consultant; Urban Planner-Environmentalist, Expert-Researcher.",
                "Joseph NGANDEU has been an international consultant in leadership, working with youth and students in 141 nations. He coordinates international camps gathering over 5000 youth and students from all continents since 2012.",
                "He is an expert in geography and has delivered numerous environmental conferences at the French Cultural Center (CCF).",
                "Founder President of CARRE.GEO (an association advocating for environmental protection and promoting actions in partnership with the French Cultural Center and the International Center for Waste Recovery, CIPRE) from 2004-2010.",
                "Lecturer at ICT University from 2016-2018, Joseph NGANDEU is known as an excellent communicator, a skilled researcher, methodical, dynamic, loyal, daring, with a strong team spirit."
            ],
            awards_and_recognition: [
                "Zacharias Tanee Fomum Excellence Award."
            ]
        }
    },
    
    {
        id: 5,
        name: "Patrice NYAMY",
        title: "Software Engineer - CEO",
        email: "",
        phone: "",
        bio: "",
        skills: [],
        experience: [
        ],
        education: [
        ],
        additional_info: {
            panelist_years: ["2021", "2022", "2023"],
            entrepreneurial_experience: "In 2020, Patrice Nyamy ventured into entrepreneurship and is now leading several businesses in various fields: IT, literary publishing, book production, and event services."
        }
    },
    
    {
        id: 6,
        name: "Steve NJOUONKEP",
        title: "Molecular Epidemiologist, Doctoral Researcher in Molecular Epidemiology",
        email: "steve.njouonkep@gmail.com",
        phone: "+33 6 87 54 32 10",
        bio: "Steve is an epidemiologist studying modifiable risk factors for cardiometabolic/non-communicable chronic diseases. His ongoing PhD research focuses on the comorbidity of metabolic syndrome, a precursor to diabetes and cardiovascular diseases, and frailty syndrome. He uses an integrative approach combining metabolomics with clinical, sociodemographic, and dietary data from large patient cohorts. The goal is to identify blood biomarkers that reflect silent metabolic disorders, enabling the prediction of disease occurrence at least 5 years before the first clinical symptoms appear.",
        skills: ["Molecular Epidemiology", "Biostatistics", "Nutrition", "Clinical Research"],
        experience: [
            {
                poste: "Doctoral Researcher in Molecular Epidemiology",
                entreprise: "INRAE / Montreal Geriatric University Institute",
                periode: "2023 - Present",
                description: "Research on comorbidities of metabolic syndrome and frailty syndrome using clinical, metabolomic, and nutritional data."
            },
            {
                poste: "Research Collaborator",
                entreprise: "Université Sorbonne Paris Nord",
                periode: "2021 - 2023",
                description: "Contributing to studies on the relationship between diet and chronic diseases within the NutriNet-Santé cohort."
            }
        ],
        education: [
            {
                diplome: "PhD in Molecular Epidemiology (Scholar)",
                etablissement: "INRAE / University of Montreal",
                annee: "2023 - ongoing"
            },
            {
                diplome: "Master's in Biostatistics",
                etablissement: "Université Paris-Saclay",
                annee: "2023"
            },
            {
                diplome: "Master's in Nutritional Epidemiology",
                etablissement: "Université Sorbonne Paris Nord",
                annee: "2021"
            }
        ],
        activities_and_publications: [
            {
                titre: "Prevalence and determinant of metabolic syndrome and pre-frailty comorbidity: results from the Whitehall II study",
                annee: "2024"
            },
            {
                titre: "N-glycolylneuraminic acid (Neu5Gc) and risk of cardiovascular diseases: A longitudinal analysis in the French NutriNet-Santé cohort",
                annee: "2022"
            },
            {
                titre: "Associations between ultra-processed food intakes and asthma symptoms or asthma control among the participants of the NutriNet-santé study",
                annee: "2022"
            }
        ],
        scientific_conferences: [
            {
                titre: "Metabolic phenotypes of metabolic syndrome and pre-frailty comorbidity in older adults",
                conference: "NutriNor conference",
                annee: "2024",
                lieu: "Oslo, Norway"
            },
            {
                titre: "Prevalence and determinant of metabolic syndrome and pre-frailty comorbidity: results from the Whitehall II study",
                conference: "World conference of epidemiology",
                annee: "2024",
                lieu: "Cape Town, South Africa"
            },
            {
                titre: "Quality of life related to health for people living with type 2 diabetes at the National Center for Hypertension and Diabetes in Yaoundé",
                conference: "French Society of Diabetes Congress",
                annee: "2019",
                lieu: "Marseille, France"
            },
            {
                titre: "Quality of life related to health for people living with type 2 diabetes at the National Center for Hypertension and Diabetes in Yaoundé",
                conference: "African Diabetes Congress",
                annee: "2019",
                lieu: "Yaoundé, Cameroon"
            }
        ]
    },
    
    {
        id: 7,
        name: "Dr Anne Josiane KOUAM",
        title: "",
        email: "",
        phone: "",
        bio: "",
        skills: [],
        experience: [
        ],
        education: [
 
        ]
    },
    {
        id: 8,
        name: "Dr Anicet FANGWA",
        title: "Assistant Professor, Strategy and Organization Expert, Consultant in Data Science and Machine Learning",
        email: "",
        phone: "",
        bio: "Anicet Fangwa Nantcho is an Assistant Professor in Strategy and Organization at McGill Desautels Faculty of Management. His research focuses on understanding how organizational governance affects the achievement of the United Nations' Sustainable Development Goals (SDGs), including promoting good health, gender equality, and sustainable cities. He argues that implementing management theories focused on governance and managerial practices is key to addressing inadequate healthcare issues and tackling poverty, gender inequality, climate change, humanitarian crises, professional integration, and access to clean water and sanitation.",
        skills: ["Data Science", "Machine Learning", "Blockchain", "Big Data", "Sustainable Development", "Strategy", "Organizational Governance"],
        experience: [
            {
                poste: "Assistant Professor in Strategy and Organization",
                entreprise: "Desautels Faculty of Management, McGill University",
                periode: "Present",
                description: "Research on the impact of organizational governance on achieving SDGs, with a focus on healthcare, poverty, gender inequality, and environmental issues."
            },
            {
                poste: "Post-doctoral Researcher focusing on Sustainability",
                entreprise: "Society and Organization Institute, HEC Paris",
                periode: "Past",
                description: "Research on sustainability in organizational governance and its role in addressing societal challenges."
            },
            {
                poste: "Lecturer, Research and Teaching Assistant",
                entreprise: "HEC Paris",
                periode: "Past",
                description: "Teaching and conducting research in strategy and sustainability."
            },
            {
                poste: "Founder and Head of API and Platforms",
                entreprise: "HrFlow (ex. Riminder), Paris, France",
                periode: "Past",
                description: "Built an integrated system leveraging Machine Learning and NLP for research and sentiment analysis."
            },
            {
                poste: "Business Analyst",
                entreprise: "L.E.K. Consulting, Paris, France",
                periode: "Past",
                description: "Worked on strategy projects across various industries, including healthcare, retail, life sciences, and telecommunications."
            },
            {
                poste: "Yield Management Business Analyst",
                entreprise: "Air France KLM, Paris, France",
                periode: "Past",
                description: "Developed key performance indicators to assess market share, revenue, and performance, reporting directly to the executive committee."
            }
        ],
        education: [
            {
                diplome: "Ph.D. in Strategy and Business Policy",
                etablissement: "HEC Paris",
                annee: "Ongoing"
            },
            {
                diplome: "Master’s Degree in Corporate Strategy and Consulting",
                etablissement: "ESCP Europe, Paris, France",
                annee: "Past"
            },
            {
                diplome: "Master of Science in Applied Mathematics",
                etablissement: "Ecole CentraleSupélec (ex. Centrale Paris), Paris, France",
                annee: "Past"
            }
        ],
        awards_and_honors: [
            {
                titre: "HEC Foundation Excellence Awards for the Ph.D. program",
                annee: "Past"
            },
            {
                titre: "French Ministry of Research, ECODEC, 'Laboratoire d’Excellence' grant",
                annee: "Past"
            },
            {
                titre: "GREGHEC grant (800€) for data collection in Kinshasa",
                annee: "Past"
            }
        ],
        publications: [
            {
                titre: "Governance and Achievement of SDGs: Insights from Organizational Theory",
                annee: "2023"
            },
            {
                titre: "The Role of Management Theories in Addressing Global Health Challenges",
                annee: "2023"
            }
        ]
    },
    
    {
        id: 9,
        name: "Dr Gilles Tagne",
        title: "Associate Professor in Robotics, Expert in Data Science and Machine Learning",
        email: "",
        phone: "",
        bio: "After an outstanding academic career, Gilles turned to applied research in robotics and industry. His current work focuses on modeling and controlling robotic systems, with applications in the future industry, connected/robotic agriculture, and the development of intelligent devices to improve the autonomy of people with disabilities.",
        skills: ["Mobile Robotics", "Industrial Robotics", "Automation", "Future Industry", "Industrial Computing"],
        experience: [
            {
                poste: "Research Professor in Robotics",
                entreprise: "JUNIA, Lille, France",
                periode: "09/2016 - Present",
                description: "Responsible for Robotics & Mechatronics-robotics since 2020. Member of the CRIStAL laboratory. Supervising PhD theses."
            },
            {
                poste: "Post-doctoral researcher in Human-Robot Interaction",
                entreprise: "LORIA Laboratory, France",
                periode: "09/2015 - 08/2016",
                description: "Research on human-robot interaction."
            },
            {
                poste: "PhD Student and ATER in Command and Trajectory Planning",
                entreprise: "UTC, France",
                periode: "09/2011 - 08/2015",
                description: "Command and trajectory planning for autonomous vehicle navigation."
            }
        ],
        education: [
            {
                diplome: "PhD in Robotics",
                etablissement: "Université de Technologie de Compiègne (UTC), France",
                annee: "2015"
            },
            {
                diplome: "Master's in Automation & Industrial Computing Research",
                etablissement: "ENSISA, Mulhouse, France",
                annee: "2011"
            },
            {
                diplome: "Bachelor's in Industrial Engineering & Maintenance",
                etablissement: "IUT of Douala, Cameroon",
                annee: "2006"
            },
            {
                diplome: "BTS in Electronics",
                etablissement: "Cameroon",
                annee: "2005"
            }
        ],
        awards_and_honors: [
            {
                titre: "Thesis Nominated for the Guy Deniélou Award at UTC",
                annee: "2015"
            },
            {
                titre: "Scholarship for participation in the European summer school EECI School 2013",
                annee: "2013"
            },
            {
                titre: "Award for Best in Class, Engineer in Automation & Systems at ENSISA",
                annee: "2011"
            },
            {
                titre: "Best in Class, Master's Research in Automation & Industrial Computing at ENSISA",
                annee: "2011"
            },
            {
                titre: "Best in Class, Bachelor's in Industrial Engineering & Maintenance, IUT of Douala, Cameroon",
                annee: "2006"
            },
            {
                titre: "National Best in Class, BTS in Electronics, Cameroon",
                annee: "2005"
            }
        ]
    },
    
    {
        id: 10,
        name: "Pr Moïse ADAMOU",
        title: "",
        email: "",
        phone: "",
        bio: "",
        skills: [],
        experience: [
        ],
        education: [
        ]
    },

];



const intervenants = [
    {
        id: 1,
        name: "Jean Claude AWALA",
        title: "Magistrat Hors Echelle - Conseiller Technique à la Présidence de la République du Cameroun",
        email: "",
        phone: "",
        bio: "Premier avocat général au parquet général près de la Cour Suprême, M AWALA Wodougue Jean Claude est un magistrat Hors hiérarchie" +
            " au parcours professionel exceptionnel",
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
        name: "Prof Dieudonné Njamen",
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
        id: 4,
        name: "Joseph NGANDEU",
        title: "PDG, Consultant International, Urbaniste et Expert-Environnementaliste",
        email: "joseph.ngandeu@gmail.com",
        phone: "+33 6 45 23 67 89",
        bio: "PDG du Consortium Global IT Smart Solutions, consultant international en leadership et expert en géographie économique et environnementale, avec une riche expérience dans la gestion de projets internationaux et la protection de l'environnement.",
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
                description: "Fourniture de conseils stratégiques pour des projets internationaux touchant au développement durable et au leadership des jeunes."
            },
            {
                poste: "Président Fondateur",
                entreprise: "CARRE.GEO",
                periode: "2004 - 2010",
                description: "Militant pour la protection de l'environnement en partenariat avec le Centre Culturel Français et d'autres organisations internationales."
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
        ],
        additional_info: {
            panelist_years: ["2022", "2023"],
            biography_details: [
                "PDG du Consortium Global IT Smart Solutions ; Consultant International ; Urbaniste-Environnementaliste, Expert-Chercheur.",
                "Joseph NGANDEU est consultant international en leadership, travaillant avec les jeunes et les étudiants dans 141 pays. Il coordonne depuis 2012 des camps internationaux rassemblant plus de 5000 jeunes et étudiants venus de tous les continents.",
                "C'est un expert en géographie et a animé plusieurs conférences sur l'environnement au Centre Culturel Français (CCF).",
                "Président Fondateur de CARRE.GEO (une association militante pour la protection de l'environnement et la promotion d'actions en partenariat avec le Centre Culturel Français et le Centre International pour la Récupération des Déchets, CIPRE) de 2004 à 2010.",
                "Enseignant à ICT University de 2016 à 2018, Joseph NGANDEU est reconnu comme un excellent communicant, un chercheur habile, méthodique, dynamique, loyal, audacieux, avec un fort esprit d'équipe."
            ],
            awards_and_recognition: [
                "Prix d'Excellence Zacharias Tanee Fomum."
            ]
        }
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
            },
            {
                poste: "Ingénieur en Informatique",
                entreprise: "Banque Mondiale, Thales, Oxiane, Qualigraf, Secrétariat général aux affaires européennes",
                periode: "Avant 2020",
                description: "Travail pour plusieurs grandes organisations et entreprises en France."
            }
        ],
        education: [
            {
                diplome: "Doctorat en intelligence artificielle",
                etablissement: "INRIA",
                annee: "2020"
            },
            {
                diplome: "Diplôme en informatique",
                etablissement: "Université Paris 6",
                annee: "Avant 2020"
            }
        ],
        additional_info: {
            panelist_years: ["2021", "2022", "2023"],
            entrepreneurial_experience: "En 2020, Patrice Nyamy s'est lancé dans l'entrepreneuriat et est désormais à la tête de plusieurs entreprises dans les secteurs de l'informatique, de l'édition littéraire, de la production de livres et de services événementiels."
        }
    },
    
    {
            id: 6,
            name: "Steve NJOUONKEP",
            title: "Épidémiologiste, chercheur doctorant en épidémiologie moléculaire",
            email: "steve.njouonkep@gmail.com",
            phone: "+33 6 87 54 32 10",
            bio: "Steve est épidémiologiste, et étudie les facteurs de risques modifiables des maladies cardiométaboliques/chroniques non transmissibles. Sa thèse en cours porte sur la comorbidité du syndrome métabolique, précurseur du diabète et des maladies cardiovasculaires, et le syndrome de fragilité. Il utilise une approche intégrative combinant la métabolomique, avec les données cliniques, sociodémographiques et les habitudes alimentaires provenant de larges cohortes de patients. L’objectif est de découvrir des biomarqueurs sanguins qui reflètent des désordres métaboliques silencieux, permettant de prédire la survenue des maladies au moins 5 ans avant l'apparition des premiers symptômes cliniques.",
            skills: ["Épidémiologie moléculaire", "Biostatistiques", "Nutrition", "Recherche clinique"],
            experience: [
                {
                    poste: "Doctorant en épidémiologie moléculaire",
                    entreprise: "INRAE / Institut universitaire de gériatrie de Montréal",
                    periode: "2023 - Aujourd'hui",
                    description: "Recherche sur les comorbidités du syndrome métabolique et du syndrome de fragilité à l'aide de données cliniques, métabolomiques et nutritionnelles."
                },
                {
                    poste: "Collaborateur de recherche",
                    entreprise: "Université Sorbonne Paris Nord",
                    periode: "2021 - 2023",
                    description: "Contribuer aux études sur la relation entre l'alimentation et les maladies chroniques dans la cohorte NutriNet-Santé."
                }
            ],
            education: [
                {
                    diplome: "Doctorant en épidémiologie moléculaire (Boursier)",
                    etablissement: "INRAE / Université de Montréal",
                    annee: "2023 - en cours"
                },
                {
                    diplome: "Master en Biostatistiques",
                    etablissement: "Université Paris-Saclay",
                    annee: "2023"
                },
                {
                    diplome: "Master en Épidémiologie Nutritionnelle",
                    etablissement: "Université Sorbonne Paris Nord",
                    annee: "2021"
                }
            ],
            activities_and_publications: [
                {
                    titre: "Prevalence and determinant of metabolic syndrome and pre-frailty comorbidity: results from the Whitehall II study",
                    annee: "2024"
                },
                {
                    titre: "N-glycolylneuraminic acid (Neu5Gc) and risk of cardiovascular diseases: A longitudinal analysis in the French NutriNet-Santé cohort",
                    annee: "2022"
                },
                {
                    titre: "Associations between ultra-processed food intakes and asthma symptoms or asthma control among the participants of the NutriNet-santé study",
                    annee: "2022"
                }
            ],
            scientific_conferences: [
                {
                    titre: "Metabolic phenotypes of metabolic syndrome and pre-frailty comorbidity in older adults",
                    conference: "NutriNor conference",
                    annee: "2024",
                    lieu: "Oslo, Norvège"
                },
                {
                    titre: "Prevalence and determinant of metabolic syndrome and pre-frailty comorbidity: results from the Whitehall II study",
                    conference: "World conference of epidemiology",
                    annee: "2024",
                    lieu: "Cap-Town, Afrique du Sud"
                },
                {
                    titre: "Qualité de vie liée à la santé des personnes vivant avec le diabète de type 2 au Centre national d’hypertension et de diabète de Yaoundé",
                    conference: "Congrès de la Société Francophone du Diabète",
                    annee: "2019",
                    lieu: "Marseille, France"
                },
                {
                    titre: "Qualité de vie liée à la santé des personnes vivant avec le diabète de type 2 au Centre national d’hypertension et de diabète de Yaoundé",
                    conference: "Congrès africain diabète",
                    annee: "2019",
                    lieu: "Yaoundé, Cameroun"
                }
            ]
        },
        
    {
        id: 7,
        name: "Dr Anne Josiane KOUAM",
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
    },

    {
        id: 8,
        name: "Dr Anicet FANGWA",
        title: "Professeur Assistant, Expert en Stratégie et Organisation, Consultant en Data Science et Machine Learning",
        email: "clement.fogue@gmail.com",
        phone: "+33 7 89 65 43 21",
        bio: "Anicet Fangwa Nantcho est professeur assistant en stratégie et organisation à la Faculté de gestion Desautels de l'Université McGill. Ses recherches portent sur la compréhension de l'impact de la gouvernance des organisations sur la réalisation des Objectifs de Développement Durable (ODD) des Nations Unies, tels que la promotion de la santé, l'égalité des genres et les villes durables. Il soutient que la mise en œuvre des théories de gestion qui se concentrent sur la gouvernance organisationnelle et les pratiques managériales est essentielle pour résoudre les problèmes de soins de santé insuffisants et lutter contre la pauvreté, les inégalités de genre, le changement climatique, les crises humanitaires, l'intégration professionnelle et l'accès à l'eau potable et à l'assainissement.",
        skills: ["Data Science", "Machine Learning", "Blockchain", "Big Data", "Développement durable", "Stratégie", "Gouvernance organisationnelle"],
        experience: [
            {
                poste: "Professeur Assistant en Stratégie et Organisation",
                entreprise: "Faculté de gestion Desautels, Université McGill",
                periode: "Actuel",
                description: "Recherche sur l'impact de la gouvernance organisationnelle sur la réalisation des ODD, avec un accent sur les soins de santé, la pauvreté, l'égalité des genres et les problèmes environnementaux."
            },
            {
                poste: "Chercheur post-doctoral axé sur la durabilité",
                entreprise: "Institut Société et Organisation, HEC Paris",
                periode: "Passé",
                description: "Recherche sur la durabilité dans la gouvernance des organisations et son rôle pour résoudre les défis sociétaux."
            },
            {
                poste: "Chargé de cours, Assistant de recherche et d'enseignement",
                entreprise: "HEC Paris",
                periode: "Passé",
                description: "Enseignement et recherche en stratégie et durabilité."
            },
            {
                poste: "Fondateur et Responsable des API et des Plates-formes",
                entreprise: "HrFlow (ex. Riminder), Paris, France",
                periode: "Passé",
                description: "Création d'un système intégré utilisant l'apprentissage automatique et le traitement du langage naturel pour la recherche et l'analyse des sentiments."
            },
            {
                poste: "Analyste commercial",
                entreprise: "L.E.K. Consulting, Paris, France",
                periode: "Passé",
                description: "Travail sur des projets de stratégie dans divers secteurs, dont la santé, le commerce de détail, les sciences de la vie et les télécommunications."
            },
            {
                poste: "Analyste en gestion du rendement",
                entreprise: "Air France KLM, Paris, France",
                periode: "Passé",
                description: "Développement des principaux indicateurs de performance pour évaluer la part de marché, les revenus et la performance, en rapportant directement au comité exécutif."
            }
        ],
        education: [
            {
                diplome: "Ph.D. en Stratégie et Politique des Affaires",
                etablissement: "HEC Paris",
                annee: "En cours"
            },
            {
                diplome: "Master en Stratégie et Consulting d'Entreprise",
                etablissement: "ESCP Europe, Paris, France",
                annee: "Passé"
            },
            {
                diplome: "Master en Sciences Appliquées en Mathématiques",
                etablissement: "Ecole CentraleSupélec (ex. Centrale Paris), Paris, France",
                annee: "Passé"
            }
        ],
        awards_and_honors: [
            {
                titre: "Prix d'Excellence de la Fondation HEC pour le programme de Ph.D.",
                annee: "Passé"
            },
            {
                titre: "Subvention du Ministère français de la Recherche, ECODEC, 'Laboratoire d'Excellence'",
                annee: "Passé"
            },
            {
                titre: "Bourse GREGHEC (800€) pour la collecte de données à Kinshasa",
                annee: "Passé"
            }
        ],
        publications: [
            {
                titre: "Gouvernance et réalisation des ODD : Perspectives issues de la théorie organisationnelle",
                annee: "2023"
            },
            {
                titre: "Le rôle des théories de gestion pour résoudre les défis mondiaux de santé",
                annee: "2023"
            }
        ]
    },
    
    {
        id: 9,
        name: "Dr Gilles Tagne",
        title: "Professeur Associé en Robotique, Expert en Data Science et Machine Learning",
        email: "clement.fogue@gmail.com",
        phone: "+33 7 89 65 43 21",
        bio: "Après un brillant parcours académique, Gilles s’est orienté vers la recherche appliquée à la robotique et l’industrie. Ses travaux actuels portent sur la modélisation et le contrôle des systèmes de systèmes robotiques, avec des applications dans l'industrie du futur, l'agriculture robotisée/connectée, et le développement de dispositifs intelligents pour améliorer l’autonomie des personnes handicapées.",
        skills: ["Robotique mobile", "Robotique industrielle", "Automatique", "Industrie du futur", "Informatique industrielle"],
        experience: [
            {
                poste: "Enseignant Chercheur en Robotique",
                entreprise: "JUNIA, Lille, France",
                periode: "09/2016 - Aujourd'hui",
                description: "Responsable des domaines Robotique & Mécatronique-robotique depuis 2020. Membre du laboratoire CRIStAL. Encadrement de thèses de doctorat."
            },
            {
                poste: "Post-doctorant en Interaction Homme-Robot",
                entreprise: "Laboratoire LORIA, France",
                periode: "09/2015 - 08/2016",
                description: "Recherche sur l'interaction entre les humains et les robots."
            },
            {
                poste: "Doctorant et ATER en Commande et Planification de Trajectoires",
                entreprise: "UTC, France",
                periode: "09/2011 - 08/2015",
                description: "Commande et planification de trajectoires pour la navigation de véhicules autonomes."
            }
        ],
        education: [
            {
                diplome: "Doctorat en Robotique",
                etablissement: "Université de Technologie de Compiègne (UTC), France",
                annee: "2015"
            },
            {
                diplome: "Master Recherche en Automatique & Informatique Industrielle",
                etablissement: "ENSISA, Mulhouse, France",
                annee: "2011"
            },
            {
                diplome: "Licence en Génie Industriel & Maintenance",
                etablissement: "IUT de Douala, Cameroun",
                annee: "2006"
            },
            {
                diplome: "BTS en Électronique",
                etablissement: "Cameroun",
                annee: "2005"
            }
        ],
        awards_and_honors: [
            {
                titre: "Thèse nominée au prix de thèse Guy Deniélou de l'UTC",
                annee: "2015"
            },
            {
                titre: "Bourse pour la participation à l'école d'été européenne EECI School 2013",
                annee: "2013"
            },
            {
                titre: "Prix du Major de la Promotion 2011, Ingénieur en Automatique & Systèmes à l'ENSISA",
                annee: "2011"
            },
            {
                titre: "Major de la Promotion, Master Recherche en Automatique & Informatique Industrielle à l'ENSISA",
                annee: "2011"
            },
            {
                titre: "Major de la Promotion, Licence en Génie Industriel & Maintenance, IUT de Douala, Cameroun",
                annee: "2006"
            },
            {
                titre: "Major national, BTS en électronique, Cameroun",
                annee: "2005"
            }
        ]
    },
    
    {
        id: 10,
        name: "Pr Moïse ADAMOU",
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
    },
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
