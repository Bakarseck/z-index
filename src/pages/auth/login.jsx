import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/loginComponent";
import { toast } from "react-toastify";
import { postData } from "@/lib/utils";
import { setSessionToken } from "@/lib/cookie";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/useSession";

export default function LoginPage() {
  const router = useRouter();

  const user = useSession();
    
  const handleLogin = async (data) => {
    try {
      const response = await postData("/api/auth/login", data);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Registration successful!");
        console.log(response.token);
        setSessionToken(response.token);
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100">
        <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <Image
              src="/path/to/logo.png"
              alt="Daaray Kocc logo"
              width={200}
              height={50}
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-center">
              Ravi de te revoir !
            </h2>
            <hr className="my-2" />
          </div>
          <Login onLogin={handleLogin} />
          <div className="flex items-center justify-between mt-4">
            <span>Je n'ai pas de compte,</span>
            <Link href="/auth/register" legacyBehavior>
              <a className="text-sm text-blue-600 hover:underline">
                je m'inscris
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
