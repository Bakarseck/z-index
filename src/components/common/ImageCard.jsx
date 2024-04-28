import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function ImageCard({ card, index }) {
    // State for hover effect
    const [hovered, setHovered] = useState(false);

    return (
        <div className="cursor-pointer">
            <Link href={`/home/${card.title.toLowerCase()}`} key={index}>
                <a
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className={`transition-transform duration-300 ease-in-out ${hovered ? 'scale-110' : 'scale-100'}`}>
                        <Image
                            src={card.image}
                            alt={`Image for ${card.title}`}
                            width={275}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </a>
            </Link>
        </div>
    );
}
