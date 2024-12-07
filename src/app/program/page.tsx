'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';
import React from "react";

const programme = [
  {
    time: "07:00 - 09:00",
    title: "ACCUEIL",
    description: "Arrivées et installation des participants",
  },
  {
    time: "09:00 - 09:15",
    title: "ACCUEIL",
    description: "Arrivées et installation des panélistes",
  },
  {
    time: "09:15 - 09:25",
    title: "ACCUEIL",
    description: "Arrivées et installation des spéciaux",
  },
  {
    time: "09:25 - 10:00",
    title: "Intermède musicale",
  },
  {
    time: "10:00 - 10:05",
    title: "Hymne du Prix d'Excellence",
  },
  {
    time: "10:05 - 10:15",
    title: "Discours d'ouverture",
    description: "M. Jean Claude AWALA - Conseiller Technique à la Présidence de la République",
  },
  {
    time: "10:15 - 10:25",
    title: "Leçon inaugurale sur le Professeur FOMUM",
    description: "M. Georges TIMBA - Président du Tribunal de Première Instance de Yaoundé",
  },
  {
    time: "10:25 - 10:35",
    title: "De la crise à l’innovation: le rôle de la science dans la solution à la pandémie",
    description: "M. Steve NJOUONKEP - Doctorant - Université Clermont Auvergne / Université de Montréal",
  },
  {
    time: "10:35 - 10:45",
    title: "Comportement humain mobile: disponibilité, exploitation et lutte contre les attaques sur la vie privée",
    description: "Ing. Dr Anne Josiane KOUAM - Chercheur à TU Berlin",
  },
  {
    time: "10:45 - 10:55",
    title: "La robotique dans notre société d'aujourd'hui et de demain",
    description: "Dr Gilles TAGNE - Professeur associé en Robotique - JUNIA - Université de Lille France",
  },
  {
    time: "10:55 - 11:05",
    title: "Une réflexion sur l'éducation",
    description: "Prof. Dr. Dieudonné NDJAMEN - Professeur Hors Echelle des Universités, Directeur du centre de recherche ZTF" +
        " Recteur de l'Institut Universitaire de la santé et Polytechnique PROCCL Libreville Gabon",
  },
  {
    time: "11:05 - 11:15",
    title: "L'art de travailler dur dans l'excellence académique",
    description: "M. Joseph NGANDEU - Consultant international",
  },
  {
    time: "11:15 - 11:25",
    title: "Science et Foi. Peut on être croyant et scientifique ?",
    description: "Dr. Anicet FANGWA - Professeur assistant - Université de McGill - Canada",
  },
  {
    time: "11:25 - 11:35",
    title: "Intermède musicale",
  },
  {
    time: "11:35 - 11:45",
    title: "Dieu, la Bible, la Science",
    description: "M. Patrice NYAMY Ingénieur Informatique - PDG de plusieurs entreprises",
  },
  {
    time: "11:45 - 11:55",
    title: "Intermède musicale",
  },
  {
    time: "11:55 - 12:05",
    title: "Echanges",
  },
  {
    time: "12:05 - 12:45",
    title: "Remise des prix",
  },
  {
    time: "12:45 - 13:00",
    title: "Discours de clôture",
  },
  {
    time: "13:00 - 13:20",
    title: "Photo de famille",
  },
];

const schedule = [
  {
    time: "07:00 - 09:00",
    title: "WELCOME",
    description: "Arrivals and participant setup"
  },
  {
    time: "09:00 - 09:15",
    title: "WELCOME",
    description: "Arrivals and panelist setup"
  },
  {
    time: "09:15 - 09:25",
    title: "WELCOME",
    description: "Arrivals and special guest setup"
  },
  {
    time: "09:25 - 10:00",
    title: "Musical Interlude"
  },
  {
    time: "10:00 - 10:05",
    title: "Hymn of the Prize of Excellence"
  },
  {
    time: "10:05 - 10:15",
    title: "Opening Speech",
    description: "Mr. Jean Claude AWALA - Technical Advisor at the Presidency of the Republic"
  },
  {
    time: "10:15 - 10:25",
    title: "Inaugural Lesson on Professor FOMUM",
    description: "Mr. Georges TIMBA - President of the Court of First Instance of Yaoundé"
  },
  {
    time: "10:25 - 10:35",
    title: "From Crisis to Innovation: The Role of Science in Solving the Pandemic",
    description: "Mr. Steve NJOUONKEP - PhD Candidate - Clermont Auvergne University / University of Montreal"
  },
  {
    time: "10:35 - 10:45",
    title: "Mobile Human Behavior: Availability, Exploitation, and Fighting Privacy Attacks",
    description: "Eng. Dr. Anne Josiane KOUAM - Researcher at TU Berlin"
  },
  {
    time: "10:45 - 10:55",
    title: "Robotics in Our Society Today and Tomorrow",
    description: "Dr. Gilles TAGNE - Associate Professor in Robotics - JUNIA - University of Lille, France"
  },
  {
    time: "10:55 - 11:05",
    title: "A Reflection on Education",
    description: "Prof. Dr. Dieudonné NDJAMEN - Full Professor, Director of the ZTF Research Center," +
        " Rector of the Polytechnic and Health University Institute PROCCL Libreville, Gabon"
  },
  {
    time: "11:05 - 11:15",
    title: "The Art of Hard Work in Academic Excellence",
    description: "Mr. Joseph NGANDEU - International Consultant"
  },
  {
    time: "11:15 - 11:25",
    title: "Science and Faith. Can One Be a Believer and a Scientist?",
    description: "Dr. Anicet FANGWA - Assistant Professor - McGill University, Canada"
  },
  {
    time: "11:25 - 11:35",
    title: "Musical Interlude"
  },
  {
    time: "11:35 - 11:45",
    title: "God, the Bible, Science",
    description: "Mr. Patrice NYAMY - Computer Engineer - CEO of Multiple Companies"
  },
  {
    time: "11:45 - 11:55",
    title: "Musical Interlude"
  },
  {
    time: "11:55 - 12:05",
    title: "Discussions"
  },
  {
    time: "12:05 - 12:45",
    title: "Prize giving"
  },
  {
    time: "12:45 - 13:00",
    title: "Closing Speech"
  },
  {
    time: "13:00 - 13:20",
    title: "Group Photo"
  }
];

export default function Schedule() {
  const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
  // Choix des données en fonction de la langue fr/en
  const events = boolState ? schedule : programme;

  return (
    <div className="min-h-screen bg-gray-100"> {/* Application de la police ici */}
      {/* Header */}
      <header
  style={{
    backgroundColor: '#131857', // Couleur personnalisée pour le fond du header
  }}
  className="relative text-white py-6 overflow-hidden" // Ajout de "relative" et "overflow-hidden"
>
  {/* Conteneur des étoiles */}
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

  <style jsx>{`
@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}
  `}</style>

  {/* Contenu principal du header */}
  <div className="relative container mx-auto px-4 text-center z-10">
    <h1 className="text-5xl text-white font-lavishly font-bold">
      {boolState ? (
        <span>Programme of the Ceremony</span>
      ) : (
        <span>Programme de la Cérémonie</span>
      )}
    </h1>

    <div className="mt-4">
      <Link href="/welcome">
        <button className="bg-orange font-montserrat font-bold text-blue-900 px-6 py-2 rounded-lg shadow sm:w-auto">
          {boolState ? "Home" : "Accueil"}
        </button>
      </Link>
    </div>
  </div>
</header>


      {/* Contenu */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white font-montserrat font-bold shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: "#ffc107", // Jaune par défaut (pauses)
              }}
            >
              <h2 className="text-lg font-montserrat font-semibold text-blue-900">{event.time}</h2>
              <h3 className="text-xl font-montserrat font-semibold mt-2 text-black">{event.title}</h3>
              <p className="text-gray-700 font-montserrat mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
