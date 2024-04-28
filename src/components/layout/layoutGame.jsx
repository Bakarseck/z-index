import { useSession } from "@/lib/useSession";
import Footer from "../common/Footer";

export default function Layout({ children }) {
    const user = useSession();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex items-start justify-center">
            <main
                className="mt-10 flex items-center flex-col justify-center  w-[80%] h-[80vh] px-4 py-10"
                style={{
                    backgroundImage: 'url(/assets/cadre.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
}
