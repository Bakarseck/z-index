import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import BodyLanding from "@/components/common/BodyLanding";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Daaray Kocc</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kavoon&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="h-[79vh] font-sans w-[85%] mx-[7.5%] my-[5vh] border-2 border-yellow-300  bg-glass  rounded-lg">
        <Navbar />
        <BodyLanding />
      </div>
      <Footer />
    </>
  );
}
