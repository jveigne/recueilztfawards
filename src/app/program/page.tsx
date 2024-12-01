'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';
import React from 'react';

const programme = [
  {
    time: "09:00 - 10:30",
    category: "Louange",
    title: "Ouverture du ZTF Awards",
    description: "Présentation des objectifs et du déroulement de la journée",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "10:45 - 12:15",
    category: "Prédication & Atelier",
    title: "Session Interactive",
    description: "Partage de la parole",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "12:15 - 13:45",
    category: "Pause",
    title: "Debrief",
    description: "Moment d'échange et de partage entre les participants",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "14:00 - 15:30",
    category: "Louange",
    title: "Courte louange",
    description: "blabla blablabla blablabla blablabla blabla",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "15:45 - 17:15",
    category: "Prédication & Atelier",
    title: "Présentation des livres ZTF",
    description: "Sessions pratiques en petits groupes",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "17:30 - 18:00",
    category: "Fin",
    title: "Clôture",
    description: "Bilan de la journée et perspectives",
    location: "Monsieur Patrice Nyamy",
  },
];

const schedule = [
  {
    time: "09:00 - 10:30",
    category: "Praise",
    title: "Opening of the ZTF Awards",
    description: "Presentation of the day's objectives and schedule",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "10:45 - 12:15",
    category: "Preaching & Workshop",
    title: "Interactive Session",
    description: "Sharing the word",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "12:15 - 13:45",
    category: "Break",
    title: "Débriefing",
    description: "A moment of exchange and sharing between participants",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "14:00 - 15:30",
    category: "Praise",
    title: "Short praise",
    description: "blabla blablabla blablabla blablabla blabla",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "15:45 - 17:15",
    category: "Preaching & Workshop",
    title: "ZTF books presentation",
    description: "Practical sessions in small groups",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "17:30 - 18:00",
    category: "End",
    title: "Closure",
    description: "Day in review and outlook",
    location: "Mr Patrice Nyamy",
  },
];

export default function Schedule() {
  const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
  // Choix des données en fonction de la langue fr/en
  const events = boolState ? schedule : programme;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header
        style={{
          backgroundColor: '#131857',
          position: 'relative', // Nécessaire pour placer les étoiles en absolu
          overflow: 'hidden',
        }}
        className="text-white py-6"
      >
        {/* Animation des étoiles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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

        {/* Contenu du header */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl text-white font-Lavishly font-bold text-center">
            {boolState ? (
              <span>Programme <br/> of the Ceremony</span>
            ) : (
              <span>Programme <br/> de la Cérémonie</span>
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
                borderColor:
                  event.category === (boolState ? "Praise" : "Louange")
                    ? "#007bff" // Bleu pour Louange / Praise
                    : event.category === (boolState ? "Preaching & Workshop" : "Prédication & Atelier")
                    ? "#28a745" // Vert pour prédication & Atelier
                    : event.category === (boolState ? "End" : "Fin")
                    ? "#FF0000" // Rouge pour la fin
                    : "#ffc107", // Jaune par défaut (pauses)
              }}
            >
              <h2 className="text-lg font-montserrat font-semibold text-blue-900">{event.time}</h2>
              <p className="text-sm font-montserrat font-bold uppercase text-gray-600">{event.category}</p>
              <h3 className="text-xl font-montserrat font-semibold mt-2 text-black">{event.title}</h3>
              <p className="text-gray-700 font-montserrat mt-2">{event.description}</p>
              <p className="mt-4 text-sm font-montserrat font-semibold text-gray-500">📍 {event.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
