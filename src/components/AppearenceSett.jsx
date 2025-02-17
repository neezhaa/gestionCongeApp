
import { useState, useRef, useEffect } from "react";

export default function AppearenceSett() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    setSelectedDate(`${year}-${month + 1}-${day}`);
    setShowCalendar(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-64">
      {/* Bouton de sélection */}
      <button
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex justify-between items-center"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {selectedDate ? selectedDate : "Pick a Date"}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          ></path>
        </svg>
      </button>

      {/* Calendrier */}
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg p-4"
        >
          <div className="grid grid-cols-7 text-gray-500 text-sm mb-2">
            {days.map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="text-center"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => (
              <button
                key={i + 1}
                className={`p-2 text-sm text-center rounded-full hover:bg-blue-200 ${
                  selectedDate === `${year}-${month + 1}-${i + 1}`
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleDateClick(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
