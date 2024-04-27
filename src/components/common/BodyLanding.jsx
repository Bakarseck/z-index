import Link from "next/link";
import React from "react";

export default function BodyLanding() {
    return (
        <div className="h-[80vh]">
            <main className="flex items-center justify-between px-[50px] h-[600px]">
                <div className="p-6 mr-10 text-black rounded-lg shadow-lg w-[500px]">
                    <h2 className="mb-2 text-2xl font-bold">Bienvenue sur DAARAY KOCC</h2>
                    <p className="mb-4">
                        {" "}
                        L'école en ligne où chaque défi enseigne une leçon.
                    </p>
                    <p className="text-sm">
                        Plongez dans notre univers ludique et éducatif, où apprendre devient
                        un voyage passionnant à travers l’histoire, la géographie et les
                        langues du Sénégal. <br /> Prêt à jouer pour apprendre et découvrir le
                        meilleur de l’éducation culturelle?
                    </p>
                    <Link href="/auth/register">
                        <button className="px-4 py-2 mt-4 text-white bg-signupBtn rounded-full w-[130px] h-[40px] bg-cover"></button>
                    </Link>
                </div>

                <div className="p-6 text-black rounded-lg shadow-md">
                    <img src="assets/landing.PNG" className="rounded-lg w-96" />
                </div>
            </main>
        </div>
    );
}
