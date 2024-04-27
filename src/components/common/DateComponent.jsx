import Image from "next/image";
import { useState, useEffect } from "react";

export default function DateComponent() {
  const [dateInfo, setDateInfo] = useState({ dayOfWeek: '', dayOfMonth: '', month: '' });

  useEffect(() => {
    const currentDate = new Date();
    const dayOfWeek = ["Dibéer", "Altine", "Talaata", "Àlarba", "Alxamis", "Àjjuma", "Gàwwu"][currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = ["Samwiye", "Fewriye", "Mars", "Awril", "Mee", "Suwe", "Sulet", "Ut", "Sattumbar", "Oktoobar", "Noowambar", "Desambar"][currentDate.getMonth()];

    setDateInfo({ dayOfWeek, dayOfMonth, month });
  }, []);

  return (
    <div className="relative p-2 rounded-full">
      <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden rounded-full">
        <Image src="/assets/date-background.png" alt="Date background" layout="fill" objectFit="cover" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
        <span className="text-xs font-bold tracking-wider uppercase">{dateInfo.dayOfWeek}</span>
        <span className="text-4xl font-bold">{dateInfo.dayOfMonth}</span>
        <span className="text-sm uppercase">{dateInfo.month}</span>
      </div>
    </div>
  );
}
