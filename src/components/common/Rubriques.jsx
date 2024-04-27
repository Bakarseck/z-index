import Card from "./CardComponent";

export default function CardContainer() {
  const cards = [
    {
      title: "Histoire",
      locked: false,
      gradient: "bg-gradient-to-r from-yellow-400 to-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 w-[80%]">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          locked={card.locked}
          gradient={card.gradient}
        />
      ))}
    </div>
  );
}
