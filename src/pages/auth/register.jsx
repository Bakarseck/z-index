import Head from "next/head";
import Register from "@/components/auth/registerComponent";
import { postData } from "@/lib/utils";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
              Bienvenue parmi nous !
            </h2>
            <hr className="my-2" />
          </div>
          <Register onRegister={handleRegister} />
          <div className="flex items-center justify-between mt-4">
            <span>J'ai déjà un compte, </span>
            <Link href="/auth/login" legacyBehavior>
              <a className="text-sm text-blue-600 hover:underline">
                je me connecte
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
