import { useSession } from "@/lib/useSession";
import Footer from "../common/Footer";
import CardProfile from "../users/CardProfile";

export default function Layout({ children }) {
  const user = useSession();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <CardProfile user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
