import Image from "next/image";
import DateComponent from "../common/DateComponent";
import { useRouter } from "next/navigation";
import { removeSessionToken } from "@/lib/cookie";

export default function CardProfile({ user }) {
  const router = useRouter();

  const logout = () => {
    removeSessionToken();
    router.push("/auth/login");
    return;
  };

  return (
    <div
      className="
      max-w-4xl p-1 
    mx-auto mt-10 bg-gradient-to-r 
    from-[#FE9F47] to-[#F8533D] 
    rounded-bl-[25px] 
    rounded-tr-[25px] 
    shadow-md
    border-[3px] border-orange-300
    flex  items-center justify-between
    "
    >
      <div className="items-center w-[30%] block">
        <Image
          src="/assets/avatar.png"
          alt={`${user.username}'s avatar`}
          width={100}
          height={100}
          className="rounded-full ml-[50px]"
        />
        <button onClick={logout} className="mt-[12px]">
          <Image src="/assets/logOutBtn.png" width={200} height={50} />
        </button>
      </div>
      <div className="ml-4 w-[40%] flex justify-between text-center text-white font-kavoon border-r-[5px] border-r-orange-700">
        <div className="w-[100%]">
          <h2 className="text-[30px] font-bold">{user.firstname}  {user.lastname}</h2>
          <p className="text-[24px]">@{user.username.toLowerCase()}</p>
          <p className="text-[20px]">lvl: 1</p>
        </div>
      </div>
      <div className="w-[30%]">
        <DateComponent />
      </div>
    </div>
  );
}
