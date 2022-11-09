import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const refreshClock = () => setDate(new Date());

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p className="clock">Сегодня {date.toLocaleDateString("ru-RU", options)}, {date.toLocaleTimeString("ru-RU")}</p>
}

export default Clock;