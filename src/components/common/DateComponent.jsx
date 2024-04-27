export default function DateComponent() {
    // Create a new Date object for the current date
    const currentDate = new Date();
  
    // Define arrays for Wolof month and weekday names
    const months = ["Samwiye", "Fewriye", "Mars", "Awril", "Mee", "Suwe", "Sulet", "Ut", "Sattumbar", "Oktoobar", "Noowambar", "Desambar"];
    const weekdays = ["Dibéer", "Altine", "Talaata", "Àlarba", "Alxamis", "Àjjuma", "Gàddu"];
  
    // Get the day of the week, day of the month, and month from the currentDate
    const dayOfWeek = weekdays[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
  
    // Construct the full date string in Wolof
    const fullDateString = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  
    return (
      <div>
        
        <div
          className="p-2 bg-red-200 rounded-full"
          style={{
            backgroundImage: "url('/assets/date-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-lg">{dayOfMonth}</p> 
        </div>
      </div>
    );
  }
  