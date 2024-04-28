import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/loginComponent";
import Navbar from "@/components/common/Navbar";
import { toast } from "react-toastify";
import { postData } from "@/lib/utils";
import { setSessionToken } from "@/lib/cookie";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/useSession";
import Footer from "@/components/common/Footer";

export default function LoginPage() {
    
    const [user, isConnected] = useSession();
    const router = useRouter();

    if (!isConnected) {
        router.push('/');
        return;
    }
    
  const handleLogin = async (data) => {
    try {
      const response = await postData("/api/auth/login", data);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Login successful!");
        console.log(response.token);
        setSessionToken(response.token);
        setTimeout(() => {
            router.push('/home');
        }, 1000)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "An error occurred while registering.");
    }
  };

  if (user) {
    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Login - Daaray Kocc</title>
      </Head>
      <Navbar/>

      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-[500px] p-6 bg-glass border-2 border-yellow-300 rounded-lg shadow-md">
          
          <div className="mb-4">
            <h2 className="text-lg font-bold text-center  text-white text-[24px]" style={{ fontFamily: "Kavoon, cursive" }}>
              Ravi de te revoir !
            </h2>
            <hr className="my-2" />
          </div>
          <Login onLogin={handleLogin} />
          <div className="flex items-center mt-4 justify-arround">
            <span className="mr-[5px]">Je n'ai pas de compte,</span>
            <Link href="/auth/register" legacyBehavior>
              <a className="text-sm text-blue-600 hover:underline">
                je m'inscris
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
