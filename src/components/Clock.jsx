import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  
  const refreshClock = () => setDate(new Date());
  
  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const dateString = date.toLocaleDateString("ru-RU", options);
  const capitalizedDateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);

  return <p className="clock">{capitalizedDateString}, {date.toLocaleTimeString("ru-RU")}</p>
}

export default Clock;