// components/CardContainer.js
import Link from "next/link";
import Card from "./CardComponent";

export default function CardContainer() {
    // Data for the cards, replace the placeholder image paths with the actual paths
    const cards = [
        {
            title: "Histoire",
            image: "/assets/histoire.png",
            locked: false,
            gradient: "from-yellow-400 to-red-400",
        },
        {
            title: "Langues",
            image: "/assets/langues.png",
            locked: false,
            gradient: "from-blue-400 to-purple-400",
        },
        {
            title: "Géographie",
            image: "/assets/geographie.png",
            locked: true,
            gradient: "from-green-400 to-yellow-400",
        },
        {
            title: "Challenge",
            image: "/assets/challenge.png",
            locked: true,
            gradient: "from-pink-400 to-purple-400",
        },
    ];

    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid max-w-6xl grid-cols-4 gap-4 p-4 mx-auto">
                {cards.map((card, index) => (
                    <Link href={`/home/${card.title.toLowerCase()}`} key={index} legacyBehavior>
                        <a className="block transition duration-500 transform hover:scale-105">
                            <Card
                                title={card.title}
                                image={card.image}
                                locked={card.locked}
                                gradient={card.gradient}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        </div>

    );
}
