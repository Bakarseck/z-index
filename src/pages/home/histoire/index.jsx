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
        <h1 className="mt-10 mb-6 text-4xl font-bold text-secondary font-kavoon">Histoire</h1>

        <div className="flex ml-[30%] mt-10 w-[70%] h-[30vh] gap-20">
          <Link href="/histoire/cours" legacyBehavior>
            <a>
              <Image
                src="/assets/cours.png"
                alt="Cours"
                width={200}
                height={200}
              />
            </a>
          </Link>

          <Link href="/histoire/game" legacyBehavior>
            <a>
              <Image
                src="/assets/game.png"
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
