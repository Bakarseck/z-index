import Layout from "@/components/layout/layoutHome";
import CardContainer from "@/components/card/CardContainer";
import { useSession } from "@/lib/useSession";

export default function Home() {
    const user = useSession();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div className="flex ml-[15%] mt-20 w-[70%] h-[50vh]">
                <CardContainer />
            </div>
        </Layout>
    );
}
