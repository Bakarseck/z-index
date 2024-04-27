// components/CardComponent.js
import Image from "next/image";

const Card = ({ title, image, locked, gradient }) => {
    const cardStyle = {
        width: "210px",
        height: "300px",
    };

    return (
        <div className={`rounded-lg p-1 bg-gradient-to-r ${gradient} relative overflow-hidden`} style={cardStyle}>
            <div className="absolute top-0 left-0 z-10 w-full h-full">
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt={title}
                />
            </div>
            <div className="relative z-20 flex flex-col items-center justify-between h-full p-4">
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <button className="rounded-full alp-2 bg-opacity-20">
                    {locked ? (
                        
                        <div className="absolute bottom-0 right-0 z-10 w-full h-full bg-black bg-opacity-40">
                            <Image
                                src="/assets/cadenas.png"
                                width={50}
                                height={50}
                                alt={title}
                            />
                        </div>
                    ) : (
                        <div className="absolute bottom-0 right-0 z-10 w-full h-full bg-black bg-opacity-40">
                            <Image
                                src="/assets/goBtn.png"
                                width={50}
                                height={50}
                                alt={title}
                            />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Card;