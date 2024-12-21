import app from './App.css'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAddEntry = async () => {
    if (!entryText.trim()) {
      alert('Please write something.');
      return;
    }

    const sentiment = await analyzeData(entryText || "I'm Good!");

    const newEntry = {
      id: Date.now(),
      text: entryText,
      date: new Date().toLocaleString(),
      sentiment,
    };

    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setEntryText('');
  };

  const analyzeData = async (myFeelings) => {

    const mockSentiments = [ "Sad", "happy", "Confused", "Disturb", "Dimotivate",'Happiness',
      'Excitement',
      'Delight',
      'Contentment',
      'Amusement',
      'Gratitude',
      'Pride',
      'Serenity',
      'Hope',
      'Love',
      'Affection',
      'Compassion',
      'Warmth',
      'Tenderness',
      'Inspiration',
      'Awe',
      'Admiration',
      'Enthusiasm',
      'Relaxation',
      'Peacefulness',
      'Satisfaction',
      'Anger',
      'Rage',
      'Annoyance',
      'Irritation',
      'Resentment',
      'Sadness',
      'Grief',
      'Loneliness',
      'Disappointment',
      'Heartache',
      'Despair',
      'Fear',
      'Anxiety',
      'Nervousness',
      'Worry',
      'Insecurity',
      'Panic',
      'Apprehension',
      'Disgust',
      'Revulsion',
      'Contempt',
      'Loathing',
      'Guilt',
      'Shame',
      'Regret',
      'Embarrassment',
      'Humiliation',
      'Curiosity',
      'Confusion',
      'Surprise',
      'Nostalgia',
      'Longing',
      'Melancholy',
      'Bittersweetness',
      'Love-hate',
      'Relief mixed with sadness',
      'Hope mixed with fear'];
    return mockSentiments[Math.floor(Math.random() * mockSentiments.length)];
  };

  const handleDeleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  const handleEditEntry = (id) => {
    const entryToEdit = entries.find((entry) => entry.id === id);
    setEntryText(entryToEdit.text);
    handleDeleteEntry(id);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{ padding: '20px' }}>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write your journal entry..."
          style={{ padding: '10px', width: '80%' }}
        />
        <button onClick={handleAddEntry} style={{ padding: '10px', marginLeft: '10px' }}>
          Add Entry
        </button>
      </div>

      <div>
        {entries.map((entry) => (
          <div key={entry.id} className="entry" style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>Mood History</h3>
            <p>
              <strong>{entry.date}</strong>
            </p>
            <p>{entry.text}</p>
            <p style={{ fontWeight: 'bold', color: '#555' }}>Sentiment: {entry.sentiment}</p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
