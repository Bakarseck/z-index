import Head from "next/head";
import { useSession } from "@/lib/useSession";
import Image from "next/image";
import DateComponent from "@/components/common/DateComponent";
import CardContainer from "@/components/common/Rubriques";

export default function UserDashboard() {
  const user = useSession();

  if (!user) {
    return <p>Loading...</p>;
  }

  const blurImageBase64 = "assets/date-background.png";

  return (
    <>
      <div className="min-h-screen font-sans bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100">
        <div className="max-w-4xl p-6 mx-auto mt-10rounded-lg shadow-md from-[#FE9F47] to-[#F8533D]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/assets/avatar.png"
                alt={`${user.username}'s avatar`}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.username}</h2>
                <p className="text-sm">@{user.username.toLowerCase()}</p>
                <p className="text-xs">lvl: 1</p>
              </div>
            </div>
            <DateComponent />
          </div>
          <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-full hover:bg-red-600">
            Se déconnecter
          </button>
        </div>
        
        <div className="flex ml-[15%] mt-20 bg-red-200 w-[70%] h-[50vh]">
            <CardContainer />
        </div>

        <footer className="py-6 text-xs text-center text-gray-600">
          ©2024 - daaraay kocc <i className="text-red-500 fas fa-heart"></i>
        </footer>
      </div>
    </>
  );
}
