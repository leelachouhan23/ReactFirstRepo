import React from 'react';

function MoodHistory({ moods }) {
  return (
    <div>
      <h2>Mood History</h2>
      <ul>
        {moods.map((mood, index) => (
          <li key={index}>
            {mood.date}: {mood.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodHistory;