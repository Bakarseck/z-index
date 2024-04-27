import Head from "next/head";
import Register from "@/components/auth/registerComponent";
import { postData } from "@/lib/utils";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = async (data) => {
    try {
      const response = await postData("/api/auth/register", data);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Registration successful!");
        setTimeout(() => {
            router.push('/');
        }, 1000)
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while registering.");
    }
  };

  return (
    <>
      <Head>
        <title>Login - Daaray Kocc</title>
      </Head>
      <Navbar/>
      <div className="flex items-center justify-center h-[90vh]  ">
        <div className="w-[500px] p-6 bg-glass border-2 border-yellow-300 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-center text-white text-[24px]" style={{ fontFamily: "Kavoon, cursive" }}>
              Bienvenue parmi nous !
            </h2>
            <hr className="my-2" />
          </div>
          <Register onRegister={handleRegister} />
          <div className="flex items-center justify-arround mt-4">
            <span className="mr-[5px]">J'ai déjà un compte, </span>
            <Link href="/auth/login" legacyBehavior>
              <a className="text-sm text-blue-600 hover:underline">
                je me connecte
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
