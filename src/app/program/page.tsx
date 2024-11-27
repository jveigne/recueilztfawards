'use client';

import Link from 'next/link';
import { useBooleanContext } from '../../../context/LanguageContext';
import React from "react";

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
    category: "prédication & Atelier",
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
    category: "prédication & Atelier",
    title: "Présentation des livres ZTF",
    description: "Sessions pratiques en petits groupes",
    location: "Monsieur Patrice Nyamy",
  },
  {
    time: "17:30 - 18:00",
    category: "fin",
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
    category: "prédication & Atelier",
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
    category: "preaching & Workshop",
    title: "ZTF books presentation",
    description: "Practical sessions in small groups",
    location: "Mr Patrice Nyamy",
  },
  {
    time: "17:30 - 18:00",
    category: "fin",
    title: "Fence",
    description: "Day in review and outlook",
    location: "Mr Patrice Nyamy",
  },
];

export default function Schedule() {
  const { boolState } = useBooleanContext(); // récupère le contexte de la langue fr/en
  // Choix des données en fonction de la langue fr/en
  const events = boolState ? schedule : programme;

  return (
    <div style={{ fontFamily: "'Cinzel', serif" }} className="min-h-screen bg-gray-100"> {/* Application de la police ici */}
      {/* Header */}
      <header
        style={{
          backgroundColor: '#131857', // Couleur personnalisée pour le fond du header
        }}
        className="text-white py-6"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">
            {boolState ? (
              <span className="text-yellow-400">Official Schedule of the Day</span>
            ) : (
              <span className="text-yellow-400">Programme officiel de la journée</span>
            )}
          </h1>

          <div className="mt-4">
            <Link href="/welcome">
              <button className="bg-yellow-400 text-blue-900 px-12 py-4 rounded-lg shadow hover:bg-gray-200">
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
              className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                borderColor:
                  event.category === (boolState ? "Praise" : "Louange")
                    ? "#007bff" // Bleu pour Louange / Praise
                    : event.category === (boolState ? "preaching & Workshop" : "prédication & Atelier")
                    ? "#28a745" // Vert pour prédication & Atelier
                    : event.category === (boolState ? "Fence" : "fin")
                    ? "#FF0000" // Rouge pour la fin
                    : "#ffc107", // Jaune par défaut (pauses)
              }}
            >
              <h2 className="text-lg font-semibold text-blue-900">{event.time}</h2>
              <p className="text-sm font-bold uppercase text-gray-600">{event.category}</p>
              <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-700 mt-2">{event.description}</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">📍 {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
