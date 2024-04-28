import Layout from "@/components/layout/layoutHome";
import { useSession } from "@/lib/useSession";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const user = useSession();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="mt-10 mb-6 text-4xl font-bold text-secondary font-kavoon">Langues</h1>

                <div className="flex ml-[30%] mt-10 w-[70%] h-[20vh] gap-20">
                    <Link href="/home/langues/cours" legacyBehavior>
                        <a className="transition duration-300 ease-in-out transform hover:scale-105">
                            <Image
                                src="/assets/decouverte_langue.png"
                                alt="Cours"
                                width={250}
                                height={250}
                            />
                        </a>
                    </Link>

                    <Link href="/home/langues/game" legacyBehavior>
                        <a className="transition duration-300 ease-in-out transform hover:scale-105">
                            <Image
                                src="/assets/game_langue.png"
                                alt="Jeux"
                                width={200}
                                height={200}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
