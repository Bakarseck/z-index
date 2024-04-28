import Image from "next/image";
import { useState, useEffect } from "react";

export default function DateComponent() {
  const [dateInfo, setDateInfo] = useState({
    dayOfWeek: "",
    dayOfMonth: "",
    month: "",
  });

  useEffect(() => {
    const currentDate = new Date();
    const dayOfWeek = [
      "Dibéer",
      "Altine",
      "Talaata",
      "Àlarba",
      "Alxamis",
      "Àjjuma",
      "Gàwwu",
    ][currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = [
      "Samwiye",
      "Fewriye",
      "Mars",
      "Awril",
      "Mee",
      "Suwe",
      "Sulet",
      "Ut",
      "Sattumbar",
      "Oktoobar",
      "Noowambar",
      "Desambar",
    ][currentDate.getMonth()];

    setDateInfo({ dayOfWeek, dayOfMonth, month });
  }, []);

  return (
    <div className="relative p-2 font-kavoon">
      {/* <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden rounded-full">
        <Image
          src="/assets/date-background.png"
          alt="Date background"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <div className="relative  flex flex-col items-center justify-center text-center">
        <span className="mt-5 text-[20px] font-bold tracking-wider text-white uppercase">
          {dateInfo.dayOfWeek}
        </span>
        <div className="bg-dateImg w-[80px] h-[80px] flex justify-center bg-cover items-center rounded-full">
          <span className="text-[30px] ml-2 font-bold text-white ">
            {dateInfo.dayOfMonth}
          </span>
        </div>
        <span className="text-[24px] text-white uppercase">{dateInfo.month}</span>
      </div>
    </div>
  );
}
