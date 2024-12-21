import React, { useState } from 'react';

function MoodSelector({ onAddMood }) {
  const [mood, setMood] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood && date) {
      onAddMood(date, mood);
      setMood('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </label>
      <label>
        Mood:
        <select 
          value={mood} 
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Excited">Excited</option>
          <option value="Anxious">Anxious</option>
        </select>
      </label>
      <button type="submit">Add Mood</button>
    </form>
  );
}

export default MoodSelector;
