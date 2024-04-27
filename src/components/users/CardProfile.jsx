import Image from "next/image";
import DateComponent from "../common/DateComponent";

export default function CardProfile({ user }) {
    return (
        <div className="max-w-4xl p-6 mx-auto mt-10 bg-gradient-to-r from-[#FE9F47] to-[#F8533D] rounded-lg shadow-md">
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
        </div>
    );
}
