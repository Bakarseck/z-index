import Layout from "@/components/layout/layoutGame";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <div className="p-4 text-center md:p-8">
                <p className="mb-5 text-xl font-medium md:text-3xl font-kavoon text-secondary">
                    Comment le
                    dit-on en wolof ?
                </p>
                <div className="flex justify-center">
                    <div className="relative inline-block w-32 h-32 transition-transform duration-300 ease-in-out cursor-pointer md:w-48 md:h-48 hover:scale-110">
                        <Link href="/home/langues/game/1image4word" legacyBehavior>
                            <a >
                                <Image
                                    src="/assets/playButton.png"
                                    layout="fill"
                                    objectFit="contain"
                                    alt="Play button"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
