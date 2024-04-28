// components/CardContainer.js
import Link from "next/link";
import Image from "next/image";

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
      title: "Geographie",
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
          <Link
            href={`/home/${card.title.toLowerCase()}`}
            key={index}
            legacyBehavior
          >
            <a
              className={`transition duration-300 ease-in-out transform hover:scale-105 ${
                card.locked ? 'filter grayscale' : ""
              }`}
            >
              <Image
                src={card.image}
                alt={`Cover image for ${card.title}`}
                width={275}
                height={400}
                className="rounded-lg"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
