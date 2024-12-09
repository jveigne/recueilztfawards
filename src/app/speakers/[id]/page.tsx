'use client';

import { use } from "react";

const speakers = [
    { id: 1, name: 'John Doe', title: 'Développeur Frontend', bio: 'Spécialiste en React et Next.js.', image: '/images/john.jpg', skills: ['React', 'Next.js', 'JavaScript'] },
    { id: 2, name: 'Jane Smith', title: 'Spécialiste IA', bio: 'Experte en intelligence artificielle.', image: '/images/jane.jpg', skills: ['Python', 'Machine Learning', 'IA'] },
    { id: 3, name: 'Paul Dupont', title: 'Designer UX/UI', bio: 'Designer d’expériences utilisateur.', image: '/images/paul.jpg', skills: ['Figma', 'UX/UI Design', 'Prototypage'] },
];

// Définir `params` comme une promesse
type Params = Promise<{ id: string }>;

export default function SpeakerProfilePage({params}: { params: Params }) {

    const resolvedParams = use(params);
    const id = parseInt(resolvedParams.id, 10);
    const speaker = speakers.find((speaker) => speaker.id === id);

    if (!speaker) {
        return <p>Speaker introuvable</p>;
    }

    return (
        <section>
            <img src={speaker.image} alt={speaker.name} />
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
    );
}
