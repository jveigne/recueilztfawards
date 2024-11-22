import React from "react";
import Link from "next/link";
const schedule = [
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

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold"><span className="text-yellow-400">Programme officiel de la journée</span></h1>
          {/* Laisser un espace avec margin pour éviter l'utilisation de balises br */}
          {/*<p className="text-lg mt-2">ZTF Awards 2024</p>*/}
          {/* Ajout d'un margin pour séparer le bouton */}
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-12 py-4 rounded-lg shadow hover:bg-blue-600 w-full">
              <Link href="/">Accueil</Link>
            </button>
          </div>
        </div>
      </header>


      <div className="container mx-auto px-4 py-8">
        {/*<h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          <span className="text-yellow-400">Programme de la Journée</span>
        </h2>*/}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schedule.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                borderColor:
                  event.category === "Louange"
                    ? "#007bff" // Bleu pour Louange
                    : event.category === "prédication & Atelier"
                    ? "#28a745" // Vert pour prédication & Atelier
                    : event.category === "fin"
                    ? "#FF0000" // Rouge pour la fin
                    : "#ffc107", // Jaune par défaut (pauses)
              }}
            >
              <h2 className="text-lg font-semibold text-blue-900">
                {event.time}
              </h2>
              <p className="text-sm font-bold uppercase text-gray-600">
                {event.category}
              </p>
              <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-700 mt-2">{event.description}</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">
                📍 {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
