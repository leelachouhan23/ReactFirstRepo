// import React from 'react';

// function MoodHistory({ moods }) {
//   return (
//     <div>
//       <h2>Mood History</h2>
//       <ul>
//         {moods.map((mood, index) => (
//           <li key={index}>
//             {mood.date}: {mood.mood}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MoodHistory;



import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MoodHistory = () => {
  const [moods, setMoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Load saved moods from localStorage
  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem('moods')) || [];
    setMoods(savedMoods);
  }, []);

  // Save a new mood entry (for testing)
  const saveMood = (mood, thoughts) => {
    const newMood = {
      mood,
      date: selectedDate.toISOString().split('T')[0], // format as YYYY-MM-DD
      thoughts,
    };
    const updatedMoods = [...moods, newMood];
    setMoods(updatedMoods);
    localStorage.setItem('moods', JSON.stringify(updatedMoods));
  };

  // Highlight dates with moods
  const moodDates = moods.map((entry) => entry.date);

  return (
    <div>
      <h2>Mood History</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) =>
          moodDates.includes(date.toISOString().split('T')[0]) ? 'highlight' : null
        }
      />
      <div>
        <h3>Selected Date: {selectedDate.toLocaleDateString()}</h3>
        <button onClick={() => saveMood('Happy', 'Feeling great today!')}>
          Log Mood (Test)
        </button>
      </div>
    </div>
  );
};

export default MoodHistory;
